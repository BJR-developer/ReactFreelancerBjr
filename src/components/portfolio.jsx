import React from 'react'
import './css/portfolio.css'
export default function portfolio() {
    return (
        <div className='portfolio'>
            <div className='section-title-black'>PORTFOLIO</div>
            <div className='tab-button'>
                <ul>
                    <li>All</li>
                    <li>Web Design</li>
                    <li>React App</li>
                    <li>NodeJS App</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            
            <div className='items'>
                <ul>
                    <li><img src='https://source.unsplash.com/300x300/?wordpress' alt='pik from unsplash' />
                    <div className='backface'>Hello world</div>
                    </li>
                    <li><img src='https://source.unsplash.com/300x300/?nodejs' alt='pik from unsplash' /></li>
                    <li><img src='https://source.unsplash.com/300x300/?reactjs' alt='pik from unsplash' /></li>
                    <li><img src='https://source.unsplash.com/300x300/?webdeveloper' alt='pik from unsplash' /></li>
                    <li><img src='https://source.unsplash.com/300x300/?webdesign' alt='pik from unsplash' /></li>
                    <li><img src='https://source.unsplash.com/300x300/?developer' alt='pik from unsplash' /></li>
                </ul>
            </div>
        </div>
    )
}
