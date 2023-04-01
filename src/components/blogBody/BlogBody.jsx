import React, { useEffect, useState } from 'react';
import BlogBookmark from '../blogBookmark/BlogBookmark';
import SingleBlog from '../singleBlog/SingleBlog';
import './BlogBody.css'
const BlogBody = () => {
    const [blogs,setBlogs]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    
    const handleAddToBookmark=(blog)=>{
         const newCart=[...cart,blog];
        setCart(newCart);
       
        
    }
    return (
        <div className='blogBody'>
            <div className="blogPosts">
                {
                    blogs.map(blog=><SingleBlog handleAddToBookmark={handleAddToBookmark} blog={blog} key={blog.id}></SingleBlog>)
                }
            </div>
            <div className="blogBookmarks"><BlogBookmark cart={cart} key={cart.id} ></BlogBookmark></div>
        </div>
    );
};

export default BlogBody;