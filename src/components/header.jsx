import React from 'react'
import './css/header.css'
export default function header() {
    const Displayshow = () =>{ const doc =document.querySelector('.navbarm>ul');
    if(doc.style.display==='none'){
        doc.style.display='flex';
        doc.classList.add('w3-animate-right');
    }else{
        doc.style.display='none';
    }
    }
    return (
      
        <>
            <header>
                <navbar id='navbar'>
                    <div className='navtitle'>Freelancer<div>BJR</div></div>
                    <ul>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Contact Me</li>
                    </ul>
                </navbar>
            </header>
            <headerm>
                <div className='navbarm'>
                <div className='topmobilebar'>
                    <div className='navtitlem'>Freelancer BJR</div>
                    <div onClick={Displayshow} className='bar'><i class="fas fa-ellipsis-h"></i></div>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
            </headerm>
            
        </>
    )
}
