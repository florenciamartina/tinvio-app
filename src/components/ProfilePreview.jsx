import React from 'react';
import {Link} from 'react-router-dom';

function ProfilePreview(props) {

    return (
        <button className="bg-transparent font-semibold py-2 px-8 border border-blue-500 hover:border-transparent rounded">                
            <h1>{props.name}</h1> 
            <h3>{props.phone}</h3>                         
        </button>
    )
}

export default ProfilePreview
