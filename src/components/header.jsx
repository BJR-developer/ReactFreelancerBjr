import React from 'react'
import './css/header.css'
import {Link} from 'react-scroll'
import Login from './login'
export default function header() {
    function show1() {
        document.getElementById('id01').style.display = 'block';
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
    function displayshowul(){ 
    const doc =document.querySelector('.navbarm>ul');
        doc.style.display='none';
    }

const addClassHeader = () => {
    document.querySelector('navbar').classList.add("navbarsticky");
    document.querySelector('navbar').classList.add("w3-animate-top");
    document.querySelector('.contactme').classList.add("contactmesticky")
}
const removeClassHeader = () => {
    document.querySelector('navbar').classList.remove("w3-animate-top");
    document.querySelector('navbar').classList.remove("navbarsticky");
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
                <navbar id='navbarmy'>
                    <div className='navtitle' style={{cursor:'pointer'}} onClick={()=>{window.location.reload()}}>Freelancer<span>BJR</span></div>
                    <ul>
                        <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link smooth={true} duration={1000} to='services'>Services</Link></li>
                        <li><Link smooth={true} duration={1000} to='skills'>Skills</Link></li>
                        <li><Link smooth={true} duration={1000} to='portfolio'>Experience</Link></li>
                        <li><Link smooth={true} duration={1000} to='review'>Review</Link></li>
                        <li><Link smooth={true} duration={1000} to='contact'>Contact me</Link></li>
                        <li>
                        <Link className='contactme' smooth={true} duration={1000} to='contact'>JOIN TODAYS</Link>
                        {/* <div className='contactme' onClick={show1}>Login</div> */}
                        </li>
                    </ul>
                </navbar>
            </header>
            <headerm>
                <div id='bgmobile' className='navbarm fixmobilebar'>
                <div className='topmobilebar'>
                    <div className='navtitlem'>Freelancer BJR</div>
                    <div onClick={()=>{displayshow()}} className='bar'><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                    <ul style={{display:'none'}}>
                    <li ><Link to='home' smooth={true} duration={1000}>Home</Link></li>
                        <li ><Link smooth={true} duration={1000} to='services'>Services</Link></li>
                        <li ><Link smooth={true} duration={1000} to='skills'>Skills</Link></li>
                        <li ><Link smooth={true} duration={1000} to='review'>Review</Link></li>
                        <li><Link smooth={true} duration={1000} to='contact'>Contact Me</Link></li>
                        {/* <p  onClick={()=> {show1()}}>Login</p> */}
                        <li><Link smooth={true} duration={1000} to='contact'>Join Todays</Link>
                        </li>
                    </ul>
                </div>
            </headerm>
            
        </>
    )
}
