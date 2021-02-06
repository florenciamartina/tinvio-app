import React, {useEffect, useState} from 'react';

function PostBox(props) {
    return (
        <div class="post-box">
            <h2 class="post-title">{props.title}</h2>
            <p class="post-body">{props.body}</p>
        </div>
    )
}

export default PostBox
