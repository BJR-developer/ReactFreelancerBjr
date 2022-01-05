import React from 'react'
import './css/customer.css'
import Review from './loopcomponents/review/review'
import rData from './loopcomponents/review/data'
export default function review() {
    return (
        <section id='review' className='review'>
            <div className='review-content'>
            <div className='section-title' style={{color:'white'}} data-aos='fade-up' data-aos-duration="1000" data-aos-mirror="true">Client Review</div>
                <ul>
                {
                   rData.map((val)=>{
                       return(
                        <Review
                links = {val.links}
                comment = {val.comment}
                author = {val.author}
                 />
                   )
                })
                }
                </ul>
            </div>
        </section>
    )
}
