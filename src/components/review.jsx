import React from 'react'
import './css/customer.css'
export default function review() {
    return (
        <section id='review' className='review'>
            <div className='review-content'>
            <div className='section-title' style={{color:'white'}} data-aos='fade-up' data-aos-duration="1000" data-aos-mirror="true">Customer Review</div>
                <ul>
                    <li data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true"><img src={require('./img/profile.png')} alt='customer pik' /> 
                        <comment>BJR Very inteligent!! He's so smart to coding</comment>
                        <author>Rahad Islam</author>
                        <review>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>

                        </review>
                    </li>
                    <li data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true"><img src={require('./img/ranbir.jfif')} alt='customer pik' /> 
                        <comment>BJR Very Good person!! He's so Fast coder</comment>
                        <author>Maruf Khan</author>
                        <review>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>

                        </review>
                    </li>
                    <li data-aos='zoom-in' data-aos-duration="1000" data-aos-mirror="true"><img src={require('./img/deepika.jpg')} alt='customer pik' /> 
                        <comment>Jamil so good</comment>
                        <author>Raiyana</author>
                        <review>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </review>
                    </li>
                </ul>
            </div>
        </section>
    )
}
