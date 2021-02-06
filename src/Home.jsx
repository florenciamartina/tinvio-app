import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePreview from './components/ProfilePreview';

function Home({users}) {

    return (
        <div className="users-container ">
            <h3 className="post-length">Showing {users.length} user(s)</h3>
            {users.length > 0 && users.map((user) => (
                <Link to ={{pathname: `/profile/${user.id}`, query: {userId: `${user.id}`}}}>
                    <ProfilePreview key={user.id} {...user}/>
                </Link>
            ))} 
        </div>
    )
}

export default Home
