import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import UserComponent from './components/UserComponent';
import Register from './pages/Register';
import RegisterComponent from './components/RegisterComponent';


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
            <Route path = "/" exact component = {UserComponent}></Route>
            <Route path = "/users" component = {UserComponent}></Route>
            <Route path = "/user" component = {RegisterComponent}></Route>

            </Switch>
          </div>
        </div>
      </Router>
    </div>

  );
}

export default App;
