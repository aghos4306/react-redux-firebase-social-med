import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
