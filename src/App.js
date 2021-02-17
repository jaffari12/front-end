import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { AuthContext } from "./AuthContext";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Posts from "./components/posts/Posts";
import submitLinkPost from "./components/posts/submitPost/submitLinkPost";
import SubmitTextPost from "./components/posts/submitPost/submitTextPost";
import ViewPost from "./components/posts/viewPost/viewPost";
import SubmitComment from "./components/posts/comments/submitComment";

function App() {
  const { userId } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login" render={() => <LoginForm />} />
          <Route path="/register" component={RegistrationForm} />

          <Route exact path="/posts" render={() => <Posts />} />
          <Route
            path="/posts/:id"
            render={(props) => <ViewPost {...props} userId={userId} />}
          />
          <Route path="/submit-link" component={submitLinkPost} />
          <Route
            path="/submit-text"
            render={() => <SubmitTextPost userId={userId} />}
          />
          <Route path="/submit-comment" component={SubmitComment} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
