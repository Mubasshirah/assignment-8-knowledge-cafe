import React from 'react';
import './BlogBookMark.css'
const BlogBookmark = (props) => {
    console.log(props.cart)
    const cart=props.cart
    
    return (
        <div className='blogBookmark'>
       <div className='blogBookmarkText'>
       <h3>Bookmarked Blogs:{cart.length} </h3> 
        {
            cart.map(singleCart=><li><h4>{singleCart.blog}</h4></li>)
        }
       </div>
       
        </div>
    );
};

export default BlogBookmark;