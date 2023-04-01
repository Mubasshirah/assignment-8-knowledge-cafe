import React from 'react';
import './SingleCart.css'
const SingleCart = (props) => {
    const {blog}=props.singleCart;
    return (
        <div>
            <h4>{blog}</h4>
        </div>
    );
};

export default SingleCart;