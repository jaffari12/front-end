import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar"
import Layout from './components/Layout';
import Jumbotron from "./components/Jumbotron";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <Jumbotron/>
    <Layout>
       <Router>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      </Layout>
      <Login/>
      <Register/>
    </React.Fragment>
  );
}

export default App;
