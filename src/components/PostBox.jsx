import React, {useEffect, useState} from 'react';

function PostBox(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default PostBox
