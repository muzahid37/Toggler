import React from 'react';

const Post = ({ post }) => {
    const { userId, title, body, id } = post;
    return (
        // <div>
        //       <figure className="px-10 pt-10">
        //             <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
        //         </figure>
        //         <div className="card-body items-center text-center">
        //             <h2 className="card-title">{title} </h2>
        //             <p>{body}</p>
        //             </div>


        // </div>
        <div className="card post-bg lg:max-w-lg bg-base-100 shadow-xl">
          
            <div className="card-body text-left">
                
            <h2 className='text-right text-red-500 text-3xl '>X</h2>
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes"  />
            </figure>

            </div>
        </div>
    );
};

export default Post;