import React from 'react';
import { Link } from 'react-router-dom';
export const BlogLoop = (props) => {
    return (
        <>
            <li>
                <img className='l-img' alt='img from freelancerbjr' src={props.img} />
                <div className='l-category'>{props.category}</div>
                <Link to={`/blogs/${props.title}`} className='l-postTitle'>{props.title}</Link>
                <div className='l-description'>{props.description}</div>
            </li>
        </>
    )
}
