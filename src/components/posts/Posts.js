import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./Posts.css";
import Utility from "../../Utility";
import Pagination from "../../Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      //console.log(response);
      setPosts(response.data.data);
    });
  }, []);

  return (
    <div className="container Posts">
      <div className="jumbotron header">
        <h1 className="h1-responsive">Coliseum</h1>
        <p className="lead">Explore posts by other users.</p>
        <hr className="my-2" />
        <div className="flex-row">
          <NavLink to="/submit-link" className="card-link">
            Submit Link
          </NavLink>
          <NavLink to="/submit-text" className="card-link">
            Submit Text
          </NavLink>
        </div>
      </div>
      <hr />
      {posts.length &&
        posts.map((post) => (
          <div key={post._id} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                {post.link ? (
                  <div className="flex-row">
                    <a className="d-inline-flex p-2" href={post.link}>
                      <h4 className="card-title h4-responsive">{post.title}</h4>
                      &nbsp;
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                ) : (
                  <NavLink to={`/posts/${post.id}`}>
                    <h4 className="card-title h4-responsive">{post.title}</h4>
                  </NavLink>
                )}

                <p className="card-text">by {post._userId.username}</p>

                <p className="card-text">
                  {Utility.parseDate(post.createdDt).date}/
                  {Utility.parseDate(post.createdDt).month}/
                  {Utility.parseDate(post.createdDt).year}
                </p>
                <p className="card-text">
                  {Utility.parseDate(post.createdDt).elapsed}
                </p>
              </div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
}

/*export default Posts;

if (this.state.posts) {
  return (
    <div className="container Posts">
      <div className="jumbotron header">
        <h1 className="h1-responsive">Coliseum</h1>
        <p className="lead">Explore posts by other users.</p>
        <hr className="my-2" />
        <div className="flex-row">
          <Link to="/submit-link" className="card-link">
            Submit Link
          </Link>
          <Link to="/submit-text" className="card-link">
            Submit Text
          </Link>
        </div>
      </div>
      <hr />
      <button
        onClick={this.handleSort}
        type="button"
        className="btn btn-elegant btn-sm"
      >
        <i className="fa fa-sort" aria-hidden="true"></i>
        &nbsp; {this.state.sort}
      </button>
      <div className="row">
        {this.state.pageOfItems
          .reduce(
            (acc, v) => (
              acc.some((o) => v._id === o._id) ? acc : acc.push(v), acc
            ),
            []
          )
          .map((post) => (
            <div key={post._id} className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  {post.link ? (
                    <div className="flex-row">
                      <a className="d-inline-flex p-2" href={post.link}>
                        <h4 className="card-title h4-responsive">
                          {post.title}
                        </h4>
                        &nbsp;
                        <i
                          className="fa fa-external-link"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  ) : (
                    <Link to={`/${post.title}/${post.id}`}>
                      <h4 className="card-title h4-responsive">
                        {post.title}
                      </h4>
                    </Link>
                  )}

                  <p className="card-text">by {post._userId.username}</p>

                  <p className="card-text">
                    {Utility.parseDate(post.createdDt).date}/
                    {Utility.parseDate(post.createdDt).month}/
                    {Utility.parseDate(post.createdDt).year}
                  </p>
                  <p className="card-text">
                    {Utility.parseDate(post.createdDt).elapsed}
                  </p>
                  <p className="card-text">
                    {post._postId.title}
                    {console.log(this.state.pageOfItems)}
                  </p>
                  <Link to={`/${post.title}/${post._postId}`}>
                                    <i className='fa fa-comments-o' aria-hidden='true'></i>
                                    &nbsp;{post._comments.filter(comment => !comment.isDeleted).length}
                                </Link>
                </div>
              </div>
              <br />
            </div>
          ))}
      </div>
    </div>
  );*/
