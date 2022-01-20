import React from 'react';
import {Router,Routes,Route, useParams } from 'react-router-dom';
import {Link, animateScroll } from 'react-scroll'
import postData from './loopcomponents/blog/blogData';
import './css/blog.css';

function Single(props) {
    let {slug} = useParams();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    animateScroll.scrollTo(50)
    let data = postData.find(val => val.title === slug);
    console.log(data.title);
    return (
        <>
            <section style={{marginLeft:"10px",marginTop:"70px"}} className='singlePost'>
            <div className='f-title'>{data.title}</div>
            <div className='category'>{data.category}</div>
            <img className='f-img' src={data.img} width="80%" alt="post img" />
            <div className='fullPost'>{data.desc}</div>
            <div className='goback'><a href="/">➡️go back to home</a></div>
        </section>
        </>
    )
}

export default Single;