import React from 'react';

function ProfilePreview(props) {

    return (
        <button className="profile-button"> 
            <h1 className="preview-name">{props.name}</h1> 
        </button>
    )
}

export default ProfilePreview
