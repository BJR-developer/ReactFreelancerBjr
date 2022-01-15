import React from 'react'
import './css/customer.css'
import Review from './loopcomponents/review/review'
import rData from './loopcomponents/review/data'
export default function review() {
    return (
        <section id='review' className='review'>
            <div className='review-content'>
            <div className='section-title' style={{color:'white'}}>Client Review</div>
                <ul>
                {
                   rData.map((val)=>{
                       return(
                        <Review key={val.id}
                links = {val.links}
                uniqueKey = {val.id}
                comment = {val.comment}
                author = {val.author}
                alt = {val.author}
                 />
                   )
                })
                }
                </ul>
            </div>
        </section>
    )
}
