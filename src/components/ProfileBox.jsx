import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import phoneLogo from '../resources/icon-24-phone.svg';
import shopLogo from '../resources/icon-24-shop.svg';
import categoryLogo from '../resources/category.png';
import headerImage from '../resources/image.jpg';
import Posts from './Posts';

function ProfileBox() {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {userId} = useParams();
 

    const getUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            console.log("data", data);
            setUser(data);
            setIsLoading(false);
        } catch (err) {
           console.log(err)
        }
        
    }

    useEffect(() => {
        getUser();
    }, []);

    console.log("Hello", user);   
    
    
    return (
        isLoading == true 
            ? <div>Loading</div>
            : <>
                <div class="outer">
                <div class="card">
                    <img src={headerImage} class="header-img"/>
                    <div class="profile">
                        <div class="info">
                            <h1 class="info-name">{user?.name}</h1> 
                        </div>
                        <div class="info">
                            <img src={phoneLogo} class="small-icon"></img>
                            <h3 class="info-details">{user?.phone}</h3> 
                        </div>
                        <div class="info">
                            <img src={categoryLogo} class="small-icon"></img>
                            {user?.company?.bs.split(" ").length > 0 && user?.company?.bs.split(" ").map((bs) => (
                                // <PostBox key={post.id} {...post}/>
                                <h3 class="info-details-bs">
                                    {bs}
                                </h3> 
                                ))}
                        </div>
                        <div class="info">
                            <img src={shopLogo} class="small-icon"></img>
                            <h3 class="info-details">{user?.address?.street},&nbsp; 
                            {user?.address?.city}, &nbsp;
                            {user?.address?.zipcode}</h3> 
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h1 class="post-name">{user?.name?.split(" ")[0]}'s posts</h1>
                    {/* <h1 class="post-name">lol's posts</h1> */}
                    <div class="posts-container">
                        <Posts userId={userId}></Posts>
                    </div> 
                </div>
            </div>
            </>
    )
}

export default ProfileBox;
