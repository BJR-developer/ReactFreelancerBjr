import React from 'react'
import './css/skill.css';

export default function skill() {
    return (
        <section id='skills' className='myskill'>
            <div className='section-title w3-animate-fade'>knowledge & skills
            </div>
            <div className='skills w3-animate-bottom'>
                <ul>
                    <li style={{width:'95%'}}>HTML & CSS <span className='one'>95%</span></li>
                    <li style={{width:'82%'}}>MongoDB authentication <span className='six'>82%</span></li>
                    <li style={{width:'60%'}}>JavaScript <span className='three'>60%</span></li>
                    <li style={{width:'75%'}}>ReactJS <span className='five'>75%</span></li>
                    <li style={{width:'80%'}}>NodeJS <span className='four'>80%</span></li>
                    <li style={{width:'45%'}}>Figma <span className='two'>45%</span></li>
                </ul>
            </div>
        </section>
    )
}
