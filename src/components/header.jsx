import React from 'react'
import './css/header.css'
import {Link} from 'react-scroll'
import Login from './login'
export default function header() {
      const jointodays = () => {
        document.querySelector('.signupform').style.display = 'block'
    }
    function displayshow(){ 
    const doc =document.querySelector('.navbarm>ul');
    if(doc.style.display==='none'){
        doc.style.display='flex';
        doc.classList.add('w3-animate-right');
    }
    else{
        doc.style.display='none';
    }};

    function hideul(){ 
    const headul =document.querySelector('.navbarm>ul');
    const hide = () =>{headul.style.display='none'} 
    setTimeout( hide , 1000)
    
    }

const addClassHeader = () => {
    document.querySelector('nav').classList.add("navbarsticky");
    document.querySelector('nav').classList.add("w3-animate-top");
    document.querySelector('.contactme').classList.add("contactmesticky")
}
const removeClassHeader = () => {
    document.querySelector('nav').classList.remove("w3-animate-top");
    document.querySelector('nav').classList.remove("navbarsticky");
    document.querySelector('.contactme').classList.remove("contactmesticky")
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
        <Login />
            <header>
                <nav id='navbarmy'>
                    <div className='navtitle' style={{cursor:'pointer'}} onClick={()=>{window.location.reload()}}>Freelancer<span>BJR</span></div>
                    <ul>
                        <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link smooth={true} duration={1000} to='services'>Services</Link></li>
                        <li><Link smooth={true} duration={1000} to='skills'>Skills</Link></li>
                        <li><Link smooth={true} duration={1000} to='portfolio'>Experience</Link></li>
                        <li><Link smooth={true} duration={1000} to='review'>Review</Link></li>
                        <li onClick={hideul}><Link smooth={true} duration={1000} to='contact'>Contact me</Link></li>
                        <li>
                        <Link className='contactme' to='signupform'
                                smooth={true}
                                duration={1000}
                                onClick={jointodays}>JOIN TODAYS</Link>                        
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='headerm'>
                <div id='bgmobile' className='navbarm fixmobilebar'>
                <div className='topmobilebar'>
                    <div className='navtitlem'>Freelancer BJR</div>
                    <div onClick={()=>{displayshow()}} className='bar'><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                    <ul style={{display:'none'}}>
                        <li><Link onClick={()=>{hideul()}} to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link onClick={()=>{hideul()}} smooth={true} duration={1000} to='services'>Services</Link></li>
                        <li><Link onClick={()=>{hideul()}} smooth={true} duration={1000} to='skills'>Skills</Link></li>
                        <li><Link onClick={()=>{hideul()}} smooth={true} duration={1000} to='review'>Review</Link></li>
                        <li><Link onClick={()=>{hideul()}} smooth={true} duration={1000} to='contact'>Contact Me</Link></li>
                        <li><Link  to='signupform'
                                smooth={true}
                                duration={1000}
                                onClick={()=>{hideul();jointodays();}}>Join Todays</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
