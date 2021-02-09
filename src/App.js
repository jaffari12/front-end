import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar"
import Layout from './components/Layout';
import Jubmotron from "./components/Jumbotron";


function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <Jubmotron/>
    <Layout>
       <Router>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
