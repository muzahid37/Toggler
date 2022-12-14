import React, { useEffect, useState } from 'react';
import Post from './Post';
import "./MainContant.css"

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (

         <div className=' posts-bg'>
         
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
         {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
         </div>
          </div>
         
      
    );
};

export default Posts;