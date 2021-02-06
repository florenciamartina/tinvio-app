import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import phoneLogo from '../resources/icon-24-phone.svg';
import shopLogo from '../resources/icon-24-shop.svg';
import categoryLogo from '../resources/category.png';
import headerImage from '../resources/image.jpg';
import PostBox from './PostBox'
import Posts from './Posts';

function ProfileBox() {

    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();
    // const userId = 1;
    
    const getUser = async () => {;
        fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
        .then(response => response.json())
        .then(json => setUser(json));
        console.log("user:", user);
        console.log("id:", userId)
    };

    const getPosts = async() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => res.json())
        .then(json => setPosts(json))
    };
     
    useEffect(() => {
        getUser();
        getPosts();
    }, []);

    // const name = user.name;
    // const phoneNumber = user.phone;
    // const street = user.address.street;
    // const suite = user.address.suite;
    // const city = user.address.city;
    // const zipcode = user.address.zipcode;
    // const firstName = 
    //     (user.name.split(" ")[0] == "Mrs." || user.name.split(" ")[0] == "Mr.")
    //         ? user.name.split(" ")[1]
    //         : user.name.split(" ")[0];
    
    return (
        <div class="outer">
            <div class="card">
                <img src={headerImage} class="header-img"/>
                <div class="profile">
                    <div class="info">
                        <h1 class="info-name">Jeanne Graham</h1> 
                    </div>
                    <div class="info">
                        <img src={phoneLogo} class="small-icon"></img>
                        <h3 class="info-details">999999999999999</h3> 
                    </div>
                    <div class="info">
                        <img src={categoryLogo} class="small-icon"></img>
                        <h3 class="info-details">Harness Real-time E-markets</h3> 
                    </div>
                    <div class="info">
                        <img src={shopLogo} class="small-icon"></img>
                        <h3 class="info-details">Kulas Light, Apt. 556, Gwenborough 92998</h3> 
                    </div>
                </div>
            </div>

                {/* <h3>{street}</h3> 
                <h3>{suite}</h3> 
                <h3>{city}</h3> 
                <h3>{zipcode}</h3>  */}
                <div class="card">
                    <h1 class="post-name">Jeanne's posts</h1>
                    <div class="posts-container">
                        <Posts userId={userId}></Posts>
                    </div> 
                </div>
            </div>
    )
}

export default ProfileBox;
