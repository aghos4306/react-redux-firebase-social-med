import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';
import LogIn from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import PostDetails from './Components/Posts/PostDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/login" component={LogIn}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/post/:id" component={PostDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
