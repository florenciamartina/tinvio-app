import React, {useEffect, useState} from 'react';
import Posts from './Posts';
import ProfileBox from './ProfileBox';


function Profile() {//userID, postID) {
    // const USERS_API = `https://jsonplaceholder.typicode.com/users/${userID}`;
    // const POSTS_API = `https://jsonplaceholder.typicode.com/posts?userID=${userID}&id=${postID}`;
    const axios = require('axios')
    const userID = 2;
    const [users, setUsers] = useState([]);
    

    const getUsers = async () => {
        // const params = new URLSearchParams([['id', `${userID}`]]);
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => setUsers(json));
    };
     
    useEffect(() => {
        getUsers();
    }, []);

    return (
      <div>
        <div class="flex">
          {users.length > 0 && users.map((user) => (
                // <PostBox key={post.id} {...post}/>
                <ProfileBox key={user.id} {...user}/>
            ))}
        </div>
      </div>
        
    )
}

export default Profile;
