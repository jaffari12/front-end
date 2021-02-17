import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import cookies from "js-cookie";

import "./submitPost.css";
import Utility from "../../../Utility";

class SubmitTextPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      success: null,
      response: null,
      authenticated: null,
      newPostId: null,
    };
    this.submitFormOnClick = this.submitFormOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    console.log(cookies.get("id"));
  }

  submitFormOnClick(e) {
    e.preventDefault();
    const { title, text } = this.state;
    if (!text) {
      return this.setState({
        success: false,
      });
    }

    axios
      .post(
        "http://localhost:5000/posts",
        {
          title,
          text,
          _userId: this.props.userId,
        },
        { headers: { authorization: "Bearer " + cookies.get("token") } }
      )
      .then((response) => {
        if (response.data.authenticated === false) {
          this.setState({
            success: false,
            authenticated: false,
          });
        } else {
          console.log(response.data.data[0]._id);
          this.setState({
            success: true,
            authenticated: true,
            newPostId: response.data.data[0]._id,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({ success: true, response: error.response.message });
      });
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleTitleChange(e) {
    const values = this.state;
    values[e.target.name] = e.target.value;
    this.setState(values);
  }

  render() {
    const { title, text } = this.state;
    return (
      <div className="container submitForm">
        <div className="submitPostForm">
          <div className="card card-body">
            <h4 className="card-title">Submit Text</h4>
            {this.state.authenticated === false && (
              <p className="red-text">You must be logged in to make a post.</p>
            )}
            {!this.state.title && <p className="red-text">Title required.</p>}
            {!this.state.text && <p className="red-text">Text required.</p>}
            <form onSubmit={this.submitFormOnClick}>
              <div className="md-form">
                <input
                  type="text"
                  id="title-form"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={this.handleTitleChange}
                />
                <label htmlFor="title-form">Title</label>
              </div>
              <div className="submit-text-form">
                <ReactQuill
                  className="text-form"
                  value={text}
                  theme="snow"
                  modules={Utility.toolbar}
                  onChange={this.handleChange}
                />
              </div>
              <hr />
              <div className="flex-row">
                <button className="btn btn-elegant">Submit</button>
              </div>
            </form>
            {this.state.success && (
              <Redirect
                to={{
                  pathname: `/posts/${this.state.newPostId}`,
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitTextPost;
