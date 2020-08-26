import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';
import LogIn from './Components/Auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/login" component={LogIn}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
