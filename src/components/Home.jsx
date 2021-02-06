import React, {useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import ProfileBox from './ProfileBox'
import ProfilePreview from './ProfilePreview';

function Home({users}) {

    return (
        <div className="users-container ">
            <p>{users.length} user(s)</p>
            {users.length > 0 && users.map((user) => (
                <Link to ={{pathname: `/profile/${user.id}`, query: {userId: `${user.id}`}}}>
                    <ProfilePreview key={user.id} {...user}/>
                </Link>
            ))} 
        </div>
    )
}

export default Home
