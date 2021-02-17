import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

import "./Posts.css";
import Utility from "../../Utility";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      // console.log(response.data);
      setPosts(response.data.data);
    });
  }, []);

  return (
    <div className="container Posts ">
      <div className="jumbotron header bg-color ">
        <h1 className="h1-responsive">Coliseum</h1>
        <p className="lead">Explore posts by other users.</p>
        <hr className="my-2" />
        <div className="flex-row links ">
          <NavLink to="/submit-link" className="card-link ">
            Submit Link
          </NavLink>
          <NavLink to="/submit-text" className="card-link ">
            Submit Text
          </NavLink>
        </div>
      </div>
      <hr />
      {posts.length &&
        posts.map((post) => (
          <div key={post._id} className="flex-row ">
            <div className="card nav-color ">
              <div className="card-body nav-color secondary ">
                {post.link ? (
                  <div className="flex-row  ">
                    <Link
                      className="d-inline-flex nav-color p-2"
                      to={`/posts/${post._id}`}
                    >
                      <h4 className="card-title nav-color h2-responsive">
                        {post.title}
                      </h4>
                      &nbsp;
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </Link>
                  </div>
                ) : (
                  <Link to={`/posts/${post._id}`}>
                    <h4 className="card-title nav-color h2-responsive">
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
              </div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
}
