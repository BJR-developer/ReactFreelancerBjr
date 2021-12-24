import React from 'react'
import './css/hero.css'
import Typical from 'react-typical'
export default function hero() {
    return (
        <>
            <div className='herosec'>
                <img src={require('./img/profile.png')} alt='profile images'/>
                <div className="small-about">
                    <div className='greetings'>
                        Whatsup Pulapain
                    </div>
                    <div className='nameTitle'>I'M BJR</div>
                    <Typical 
                        steps={['ReactJS App Developer' , 1000 , 'Expert On NodeJS App Developing' , 1000 ,'Ecommerce Builder' , 700 , 'Wordpress Expert' ,1000, 'Designer by Figma',700]}
                        loop={Infinity}
                        wrapper='p'
                    />
                    <ul>
                        <li><i class="fas fa-home"></i>Dhaka, Bangladesh</li>
                        <li><i class="fas fa-envelope"></i> liquidtv24@gmail.com</li>
                        <li><i class="fas fa-link"></i>https://wwww.freelancerbjr.com</li>
                        <li><i class="fas fa-phone"></i> +8801608234706</li>
                    </ul>
                    <div className='social-media'>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-tiktok"></i>
                        {/* <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Github</p>
                        <p>Tiktok</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}
