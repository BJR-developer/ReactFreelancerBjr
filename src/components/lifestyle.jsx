import React from 'react'
import './css/lifestyle.css'

export default function lifestyle() {
    return (
        <div className='lifestyle w3-animate-down'>
            <div className='section-title'>FEATURED PROJECTS</div>
            <div className='life-content'>
            <div className='life-title w3-animate-left'>
            <h2>BJR Marketplace</h2>
                <p>A Biggest Marketplace to do Freelancing</p>
                <div className='tag'>like fiver, upwork, freelancer</div>
            </div>
            <img className='w3-animate-right' src={require('./img/work.jpg')} alt="pic of market" />
            </div>
        </div>
    )
}
