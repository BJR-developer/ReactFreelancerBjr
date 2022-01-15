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
                        key = {val.id}
                        title={val.title}
                        price = { val.price}
                        img = {val.img}
                    />
                    )      
                })
            }
            </div>

        </section>
    )
}
