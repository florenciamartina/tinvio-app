import React, {useEffect, useState} from 'react';
import PostBox from './PostBox'
// import { client as fetch } from '../fetchutils';



function Posts(userID) {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
        .then((res) => res.json())
        .then(json => setPosts(json))
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>Showing {posts.length} result(s)</h1>
            {posts.length > 0 && posts.map((post) => (
                // <PostBox key={post.id} {...post}/>
                <PostBox key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default Posts;
