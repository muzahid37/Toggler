import React from 'react';
import './MainContant.css'
const hPost = ({ post }) => {
    const { userId, title, body, id } = post;
    return (
        <div className="card-body bg-base-100 h-post">

            <div className="avatar">
                <div className="w-24 h-24 rounded-full ">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
                <div className='px-7'>
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>

                </div>

            </div>
        </div>
    );
};

export default hPost;