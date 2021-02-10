import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar"
import Layout from './components/Layout';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';


function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <React.Fragment>
        <NavBar/>
        
    <Layout>
       <Router>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegistrationForm}/>
          <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      </Layout>
    
    </React.Fragment>
  );
}

export default App;

