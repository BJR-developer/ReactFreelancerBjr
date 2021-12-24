import React from 'react'
import './css/marketing.css'
export default function marketing() {
    return (
        <div className='marketing'>
            <div className='section-title'>MY SERVICES</div>

            <div className='for-left'>
                <img src='https://source.unsplash.com/300x300/?pc' alt='computer' />
                <div className='text-side'>
                <div className='e-title'>React App Development</div>
                <p className='little-text'>Starts from</p>
                <price>541$</price>
                </div>
            </div>
            <div className='for-right'>
                <img src='https://source.unsplash.com/300x300/?pc' alt='computer' />
                <div className='text-side'>
                <div className='e-title'>Node Js App Build</div>
                <p className='little-text'>Starts from</p>
                <price>364$</price>
                </div>
            </div>
            <div className='for-left'>
                <img src='https://source.unsplash.com/300x300/?pc' alt='computer' />
                <div className='text-side'>
                <div className='e-title'>MERN Stack Website</div>
                <p className='little-text'>Starts from</p>
                <price>400$</price>
                </div>
            </div>
            <div className='for-right'>
                <img src='https://source.unsplash.com/300x300/?pc' alt='computer' />
                <div className='text-side'>
                <div className='e-title'>Ecommerce Wordpress Website</div>
                <p className='little-text'>Starts from</p>
                <price>600$</price>
                </div>
            </div>

        </div>
    )
}
