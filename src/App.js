import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Posts from './components/Posts'
import ProfileBox from './components/ProfileBox'
import Home from './components/Home'

function App() {

    const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => setUsers(json));
        console.log(users);
    };
     
    useEffect(() => {
        getUsers();
    }, []);


  return (
    <Router>
      <Switch>
      <Router exact path="/">
        <Home users={users}/>
      </Router>

      <Router path="/user">
        <ProfileBox/>
      </Router>
      <Router path="/:userId">
        <ProfileBox />
      </Router>
      </Switch>
      
    </Router>
  );
}

export default App;
