import React from 'react'
import './css/hero.css'
export default function hero() {
    return (
        <>
            <section className='herosec'>
                <img data-aos='fade-right' data-aos-duration="1000" data-aos-mirror="true" src={require('./img/profile.png')} alt='profile images'/>
                <div className="small-about">
                    <div className='greetings' data-aos='fade-left' data-aos-duration="1000" data-aos-mirror="true">
                        Whatsup Pulapain
                    </div>
                    <div className='nameTitle' data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true">I'M BJR</div>
                    <div  data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true" className='workinfo'>MERN Stack Developer</div>
                    {/* <Typical 
                        steps={['ReactJS App Developer' , 1000 , 'Expert On NodeJS App Developing' , 1000 ,'Ecommerce Builder' , 700 , 'Wordpress Expert' ,1000, 'Designer by Figma',700]}
                        loop={Infinity}
                        wrapper='p'
                    /> */}
                    <ul data-aos='fade-up' data-aos-duration="1000" data-aos-mirror="true">
                        <li><i class="fas fa-home"></i>Dhaka, Bangladesh</li>
                        <li><i class="fas fa-envelope"></i> liquidtv24@gmail.com</li>
                        <li><i class="fas fa-link"></i>https://wwww.freelancerbjr.com</li>
                        <li><i class="fas fa-phone"></i> +8801608234706</li>
                    </ul>
                    <div className='social-media' data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true">
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
