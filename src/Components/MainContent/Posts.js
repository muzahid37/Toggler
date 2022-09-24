import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    return (

        <div className=' dark:bg-slate-800'>
              {
                posts.map(post=><Post
                    key={post.id}
                    post={post}
                    ></Post>)
              }
              {/* <Post></Post> */}
        </div>
    );
};

export default Posts;