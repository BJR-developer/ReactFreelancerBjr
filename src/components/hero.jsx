import React from 'react'
import './css/hero.css'
export default function hero() {
    return (
        <>
            <section className='herosec w3-animate-fade'>
                <img className='w3-animate-left' src={require('./img/profile.png')} alt='profile images'/>
                <div className="small-about w3-animate-right">
                    <div className='greetings w3-animate-top'>
                        Whatsup Pulapain
                    </div>
                    <div className='nameTitle' >I'M BJR</div>
                    <div  className='workinfo'>MERN Stack Developer</div>
                    {/* <Typical 
                        steps={['ReactJS App Developer' , 1000 , 'Expert On NodeJS App Developing' , 1000 ,'Ecommerce Builder' , 700 , 'Wordpress Expert' ,1000, 'Designer by Figma',700]}
                        loop={Infinity}
                        wrapper='p'
                    /> */}
                    <ul className='w3-animate-right' >
                        <li><i class="fas fa-home"></i>Dhaka, Bangladesh</li>
                        <li><i class="fas fa-envelope"></i> liquidtv24@gmail.com</li>
                        <li><i class="fas fa-link"></i>https://wwww.freelancerbjr.com</li>
                        <li><i class="fas fa-phone"></i> +8801608234706</li>
                    </ul>
                    <div className='social-media w3-animate-fade' >
                    <a target='_blank' rel='noreferrer' href='https://facebook.com/jamilur.rahman.bjr'><i class="fab fa-facebook"></i></a>
                    <a target='_blank' rel='noreferrer' href='https://instagram.com/jamilur_rahman_bjr'><i class="fab fa-instagram"></i></a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/BJR-Developer'><i class="fab fa-github"></i></a>
                    <a target='_blank' rel='noreferrer' href='https://twitter.com/freelancerbjr'><i class="fab fa-twitter"></i></a>
                    <a target='_blank' rel='noreferrer' href='https://tiktok.com/jamilurrahmanbjr'><i class="fab fa-tiktok"></i></a>
                        {/* <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Github</p>
                        <p>Tiktok</p> */}
                    </div>
                </div>
            </section>
        </>
    )
}
