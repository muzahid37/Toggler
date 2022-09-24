import React from 'react';

const Post = ({post}) => {
    const {userId,title,body,id}=post;
    return (
        <div>
            <h2 className='text-3xl font-bold underline'>post</h2>
            <h2>{body}</h2>
        </div>
    );
};

export default Post;