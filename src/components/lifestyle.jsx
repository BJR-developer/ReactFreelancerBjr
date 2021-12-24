import React from 'react'
import './css/lifestyle.css'

export default function lifestyle() {
    return (
        <div className='lifestyle'>
            <div className='section-title'>FEATURED PROJECTS</div>
            <div className='life-content'>
            <div className='life-title'>
            <h2>BJR Marketplace</h2>
                <p>A Biggest Marketplace to do Freelancing</p>
                <tag>like fiver, upwork, freelancer</tag>
            </div>
            <img src={require('./img/work.jpg')} alt="pic of market" />
            </div>
        </div>
    )
}
