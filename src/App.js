import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ProfileBox from './components/ProfileBox'
import Home from './Home'

function App() {

    const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        setUsers(data);
        console.log("users", users);
    };
     
    useEffect(() => {
        getUsers();
    }, []);

  return (
    <Router>
      <Route exact path="/profile/:userId" component={ProfileBox} />
      <Route exact path="/">
        <Home users={users}/>
      </Route>
      
    </Router>
  );
}

export default App;
