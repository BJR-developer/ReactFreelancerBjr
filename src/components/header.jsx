import React from 'react'
import './css/header.css'
import {Link} from 'react-scroll'
export default function header() {

    function displayshow(){ 
    const doc =document.querySelector('.navbarm>ul');
    if(doc.style.display==='none'){
        doc.style.display='flex';
        doc.classList.add('w3-animate-right');
    }
    else{
        doc.style.display='none';
    }};
const addClassHeader = () => {
    document.querySelector('navbar').classList.add("navbarsticky");
    // document.querySelector('navbar').setAttribute('data-aos','fade')
    document.querySelector('navbar').classList.add("w3-animate-top");
}
const removeClassHeader = () => {
    document.querySelector('navbar').classList.remove("w3-animate-top");
    document.querySelector('navbar').classList.remove("navbarsticky");
}
window.addEventListener('scroll', function () {
    let getScrollposition = window.scrollY;
    if (getScrollposition > 90) {
        addClassHeader();
    } else {
        removeClassHeader();
    }
});

    return (
      
        <>
            <header>
                <navbar id='navbarmy'>
                    <div className='navtitle' style={{cursor:'pointer'}} onClick={()=>{window.location.reload()}}>Freelancer<span>BJR</span></div>
                    <ul>
                        <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link smooth={true} duration={1000} to='services'>Services</Link></li>
                        <li><Link smooth={true} duration={1000} to='skills'>Skills</Link></li>
                        <li><Link smooth={true} duration={1000} to='portfolio'>Experience</Link></li>
                        <li><Link smooth={true} duration={1000} to='review'>Review</Link></li>
                        <li className='contactme'><Link smooth={true} duration={1000} to='contact'>Contact Me</Link></li>
                    </ul>
                </navbar>
            </header>
            <headerm>
                <div id='bgmobile' className='navbarm fixmobilebar'>
                <div className='topmobilebar'>
                    <div className='navtitlem'>Freelancer BJR</div>
                    <div onClick={()=>{displayshow()}} className='bar'><i class="fas fa-ellipsis-h"></i></div>
                    </div>
                    <ul style={{display:'none'}}>
                    <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link smooth={true} duration={1000} to='services'>Services</Link></li>
                        <li><Link smooth={true} duration={1000} to='skills'>Skills</Link></li>
                        <li><Link smooth={true} duration={1000} to='portfolio'>Experience</Link></li>
                        <li><Link smooth={true} duration={1000} to='review'>Review</Link></li>
                        <li className='contactme'><Link smooth={true} duration={1000} to='contact'>Contact Me</Link></li>
                    </ul>
                </div>
            </headerm>
            
        </>
    )
}
