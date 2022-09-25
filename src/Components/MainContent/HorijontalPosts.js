import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../MainContent/MainContant.css'
import HPost from './HPost';
import './MainContant.css'

const HorijontalPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (


        <div className='hPosts'>
            <div className="card w-9/12  shadow-xl">
                {
                    posts.map(post => <HPost
                        key={post.id}
                        post={post}
                    ></HPost>)
                }
            </div>
            {/* <Post></Post> */}
        </div>
    );
};

export default HorijontalPosts;