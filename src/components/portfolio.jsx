import React from 'react'
import './css/portfolio.css'
export default function portfolio() {
    return (
        <section id='portfolio' className='portfolio'>
            <div className='section-title-black' data-aos='fade-left' data-aos-duration="1000" data-aos-mirror="true">PORTFOLIO</div>
            <div className='tab-button'>
                <ul  data-aos='fade-right' data-aos-duration="1000" data-aos-mirror="true">
                    <li>All</li>
                    <li>Web Design</li>
                    <li>React App</li>
                    <li>NodeJS App</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            
            <div className='items'  data-aos='fade-up' data-aos-duration="1000" data-aos-mirror="true">
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
        </section>
    )
}
