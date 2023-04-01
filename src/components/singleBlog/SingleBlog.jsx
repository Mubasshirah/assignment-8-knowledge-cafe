import React from 'react';
import './SingleBlog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'


const SingleBlog = (props) => {
    const {id,coverUrl,picture,time,name,publishedDate,blog}=props.blog;
    const handleAddToBookmark=props.handleAddToBookmark;
    return (
        <div className='singleBlog'>
            <img src={coverUrl} alt="" />
            <div className='author-img-date'>
                <img src={picture} alt="" />
                <div className='author-publish'>
                    <h4>{name}</h4>
                    <p>{publishedDate}</p>
                </div>
                <p>{time} min read <button className='btn-singleBlog' onClick={()=>handleAddToBookmark(props.blog)} ><FontAwesomeIcon className='font' icon={faBookBookmark} /></button></p>
            </div>
            <h2>{blog}</h2>
            <button>Mark as read</button>
        </div>
    );
};

export default SingleBlog;