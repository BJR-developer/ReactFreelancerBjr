import React from 'react'
export default function Gig(props) {
    return (
        <>
            <div className='proContents'>
                <img src={
                        props.img
                    }
                    alt='gigs'/>
                <div className='text-side'>
                    <div className='e-title'>
                        {
                        props.title
                    }</div>
                    <p className='little-text'>Starts from</p>
                    <price>{
                        props.price
                    }</price>
                </div>
                <a className='order' href='https://www.fiverr.com/bjrpro'>ORDER NOW</a>
            </div>
        </>
    )
}

