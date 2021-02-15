import React, { Component } from "react";
import axios from "axios";

import "./ViewPost.css";
import Utility from "../../../Utility";
import SubmitComment from "../comments/submitComment";
import DeleteComment from "../comments/deleteComments";
import EditPost from "../editPost/EditPost";

class ViewPost extends Component {
  constructor() {
    super();
    this.state = {
      post: null,
      comments: [],
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    this.getPost();
  }

  getPost() {
    let postTitle = this.props.match.params.title;
    let id = this.props.match.params.id;
    axios
      .get(`/api/post/${postTitle}/${id}`)
      .then((response) => {
        //console.log(response.data);
        return this.setState({
          post: response.data,
          comments: response.data._postId.reverse(),
        });
      })
      .catch((error) => {
        return this.setState({
          post: {
            title: "Post doesn't exist anymore.",
            text: "The author may have deleted the post.",
          },
        });
      });
  }

  //delete post
  deletePost(e) {
    e.preventDefault();
    const { id } = this.state.post;
    axios
      .post("/api/deletePost", { id })
      .then((response) => {
        return this.setState({
          post: {
            title: "Post has been deleted.",
            text: "You have deleted this post.",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    console.log(this.state);
    if (this.state.post && this.state.post !== "deleted") {
      const { post, comments } = this.state;
      return (
        <div>
          <div className="container">
            <h2 className="h2-responsive mt-4 font-bold dark-grey-text">
              <strong>{post.title}</strong>
            </h2>
            {post._userId && !post._userId.isDeleted ? (
              <a className="text-muted">by {post._userId.username}</a>
            ) : (
              <a className="text-muted">by deleted</a>
            )}
            <p className="text-muted">
              {Utility.parseDate(post.createdDt).month}/
              {Utility.parseDate(post.createdDt).date}/
              {Utility.parseDate(post.createdDt).year}
            </p>
            <hr />
            {post.text && (
              <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
            )}
            {post.link && (
              <div>
                <a href={post.link} target="_blank">
                  {post.link}
                </a>
                <br />
              </div>
            )}
            {post._userId && (
              <div>
                {this.props.user &&
                  this.props.user.username === post._userId.username && (
                    <div>
                      <button
                        type="button"
                        data-toggle="collapse"
                        data-target="#edit-post-form"
                        aria-expanded="false"
                        aria-controls="edit-post-form"
                        className="btn btn-default btn-sm p-2"
                      >
                        Edit Post
                      </button>
                      <button
                        onClick={this.deletePost}
                        className="btn btn-danger btn-sm p-2"
                      >
                        Delete Post
                      </button>
                      {post.text && <EditPost text={post.text} id={post.id} />}
                    </div>
                  )}
              </div>
            )}
            <hr />
            <button
              onClick={this.handleSort}
              type="button"
              className="btn btn-elegant btn-sm"
            >
              <i className="fa fa-sort" aria-hidden="true"></i>
              &nbsp; {sort}
            </button>
            <SubmitComment
              postId={this.props.match.params.id}
              title={this.props.match.params.title}
              url={this.props.match.url}
            />
            {comments.map((comment) => {
              if (!comment.isDeleted) {
                return (
                  <div key={comment.id}>
                    <blockquote className="blockquote">
                      <div
                        dangerouslySetInnerHTML={{ __html: comment.text }}
                      ></div>
                      {comment._userId && !comment._userId.isDeleted ? (
                        <footer className="blockquote-footer">
                          {comment._userId.username},{" "}
                          {Utility.parseDate(comment.createdDt).elapsed}
                        </footer>
                      ) : (
                        <footer className="blockquote-footer">
                          deleted,{" "}
                          {Utility.parseDate(comment.createdDt).elapsed}
                        </footer>
                      )}
                      {comment._userId &&
                        this.props.user &&
                        this.props.user.username ===
                          comment._userId.username && (
                          <DeleteComment id={comment.id} />
                        )}
                    </blockquote>
                  </div>
                );
              } else if (comment.isDeleted) {
                return (
                  <div key={comment.id}>
                    <p className="mb-0 text-muted">
                      comment deleted{" "}
                      {Utility.parseDate(comment.createdDt).elapsed}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      </div>
    );
  }
}

export default ViewPost;
