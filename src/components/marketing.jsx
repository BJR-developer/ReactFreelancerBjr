import React from 'react'
import './css/marketing.css'
import Gig from "./loopcomponents/gig/gig"
import GigData from './loopcomponents/gig/gigData'
export default function marketing() {
    return (
        <section id='services' className='marketing'>
            <div className='section-title'>MY SERVICES</div>

            <div className='myproducts'>
            {
                GigData.map((val)=>{
                    return(
                        <Gig 
                        title={val.title}
                        price = { val.price}
                        img = {val.img}
                    />
                    )      
                })
            }
            {/* <div className='proContents' data-aos='fade-left' data-aos-duration="1000" data-aos-mirror="true">
                <img src='https://source.unsplash.com/300x300/?pc' alt='computer' />
                <div className='text-side'>
                <div className='e-title'>React App Development</div>
                <p className='little-text'>Starts from</p>
                <price>541$</price>
                </div>
                <a className='order' href='https://www.fiverr.com/bjrpro'>ORDER NOW</a>
            </div> */}
            </div>

        </section>
    )
}
