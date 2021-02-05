import React, {useEffect, useState} from 'react';
import PostBox from './PostBox'

function ProfileBox(props) {

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.id}`)
        .then((res) => res.json())
        .then(json => setPosts(json))
    };

    useEffect(() => {
        getPosts();
    }, []);

    
    return (
        <div>
            <h1>{props.name}</h1> 
            <h3>{props.phone}</h3> 
            <div>
            <h1>{props.name.split(" ")[0]}'s posts</h1> 
                <h1>Showing {posts.length} result(s)</h1>
                {posts.length > 0 && posts.map((post) => (
                    // <PostBox key={post.id} {...post}/>
                    <PostBox id={props.id} key={post.id} {...post}/>
                ))}
            </div>
        </div>
    )
}

export default ProfileBox;
