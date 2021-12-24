import React from 'react';
import './css/contact.css'
export default function contact() {
    return (
        <section className='contact'>
            <div className='section-title' style={{color:'white'}}>Get In Touch</div>
            <div className='cform'>
                <div>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='email' placeholder='Email' />
                <input type='text' name='subject' placeholder='Subject' />
                </div>
                <input className='messageField' type='text' name='message' placeholder='Your message' />
            </div>
            <button>Send message</button>
        </section>
    )
}
