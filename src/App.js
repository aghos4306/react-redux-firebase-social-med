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
import Firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA09F6P7I8K58pVWYnBkJmY9vSf2e_jt9o',
  authDomain: 'reactreduxsocialapp.firebaseapp.com',
  databaseURL: 'https://reactreduxsocialapp.firebaseio.com',
  projectId: 'reactreduxsocialapp',
  storageBucket: 'reactreduxsocialapp.appspot.com',
  messagingSenderId: '210258481853',
  appId: '1:210258481853:web:c343364846c1225e59ddd4',
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();
db.collection('posts')
  .get()
  .then((resp) => {
    // console.log('resp is: ');
    console.log(resp);
    /* console.log('resp.doc is: ' + resp.docs);
    console.log(resp.docs);
    console.log('resp.docs[0].data()');
    console.log(resp.docs[0].data()); */
  })
  .catch((err) => {
    console.log(err);
  });

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
