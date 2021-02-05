import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Profile from './components/Profile'
import Posts from './components/Posts'

function App() {
  return (
    <Router>
      <Router exactpath="/profile">
        <Profile/>
      </Router>
      <Router exactpath="/posts">
        <Posts/>
      </Router>
    </Router>
  );
}

export default App;
