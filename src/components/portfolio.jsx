import React from 'react'
import './css/portfolio.css'
import { useParams } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";

function All(props) {
    let {slug} = useParams();
    console.log(slug);
    return(
        <ul>
        <li><img src={'https://source.unsplash.com/300x300/?' + props.link1 } alt={`pik from unsplash ${slug}`} /></li>
        <li><img src={'https://source.unsplash.com/300x300/?' + props.link2 } alt={`pik from unsplash ${slug}`} /></li>
        <li><img src={'https://source.unsplash.com/300x300/?' + props.link3 } alt={`pik from unsplash ${slug}`} /></li>
    </ul>
    )
}

export default function portfolio() {
    
    return (
        <section id='portfolio' className='portfolio'>
            <div className='section-title-black'>PORTFOLIO</div>
            <div className='tab-button'>
                <ul>
                    <li><Link to="*">All </Link></li>
                    <li><Link to="/reactjs">ReactJS </Link></li>
                    <li><Link to="/nextjs">Next.JS </Link></li>
                    <li><Link to="/nodejs">NodeJS App </Link></li>
                </ul>
            </div>
            <div className='items'>
            <Routes>
            <Route path="*" element={<All link1="nodejs" link2="facebook" link3="instagram"/>}/>
            <Route path="/reactjs" element={<All link1="reactjs" link2="facebook" link3="instagram" />} />
            <Route path="/nodejs" element={<All link1="nodejs" link2="facebook" link3="chat" />} />
            <Route path='/nextjs' element={<All link1="professional" link2="whatsapp" link3="talk" />} />
            </Routes>
                </div>
        </section>
    )
}
