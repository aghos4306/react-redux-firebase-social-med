import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';
import LogIn from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import PostDetails from './Components/Posts/PostDetails';
import Feeds from './Components/HomePage/Feeds';
import LogOut from './Components/Auth/LogOut';
import CreateNewPost from './Components/Posts/CreateNewPost';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/login" component={LogIn}></Route>
          <Route exact path="/create" component={CreateNewPost}></Route>
          <Route exact path="/logout" component={LogOut}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/post/:id" component={PostDetails}></Route>
          <Route exact path="/" component={Feeds}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
