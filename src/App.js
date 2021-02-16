import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Posts from "./components/posts/Posts";
import submitLinkPost from "./components/posts/submitPost/submitLinkPost";
import submitTextPost from "./components/posts/submitPost/submitTextPost";
import ViewPost from "./components/posts/viewPost/viewPost";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />

          <Route exact path="/posts" component={Posts} />
          <Route
            path="/posts/:id"
            render={(props) => <ViewPost {...props} />}
          />
          <Route path="/submit-link" component={submitLinkPost} />
          <Route path="/submit-text" component={submitTextPost} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
