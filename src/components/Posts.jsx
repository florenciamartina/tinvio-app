import React, {useEffect, useState} from 'react';
import PostBox from './PostBox'



function Posts({userId}) {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => res.json())
        .then(json => setPosts(json))
        console.log("posts", posts);
        console.log("posts id", userId);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h3 class="post-length">Showing {posts.length} result(s)</h3>
            {posts.length > 0 && posts.map((post) => (
                // <PostBox key={post.id} {...post}/>
                <PostBox key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default Posts;
