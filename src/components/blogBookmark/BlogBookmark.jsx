import React from 'react';
import './BlogBookMark.css'
const BlogBookmark = (props) => {
    console.log(props.cart)
    const cart=props.cart
    const time=props.time
    
    return (
        <div className='blogBookmark'>
            <div className='readtime'>
                <h2>Spent time on read:{time}</h2>
            </div>
     
       <div className='blogBookmarkText'>
       <h3>Bookmarked Blogs:{cart.length} </h3> 
        {
            cart.map(singleCart=><li key={singleCart.id}><h4>{singleCart.blog}</h4></li>)
        }
       </div>
       
        </div>
    
    );
};

export default BlogBookmark;