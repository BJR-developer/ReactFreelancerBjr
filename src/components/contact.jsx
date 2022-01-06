import React , {useRef , useState} from 'react';
import emailjs from 'emailjs-com';
import './css/contact.css'

export default function Contact() {
    const [formSuccess , fyes] = useState([])
    const form = useRef();

    const formsubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_xwmg6jr', 'template_t81be4r', form.current, 'user_WPITZH3aWVPP388DE2CBg')
        .then((result) => {
            fyes("send")
            console.log(result.text);
        }, (error) => {
            fyes("notsend")    
            console.log(error.text);
        });

    }
    return (
        <section id='contact' className='contact'>
            <div className='section-title' style={{color:'white'}}>Get In Touch</div>
             <p className='result'>
             {
            formSuccess==='send' ? 
             <span className='finalresult'>Message Send Successfully</span>
            :
            ''
            }
             {
            formSuccess==='notsend' ? 
             <span className='finalresultdown'>Message Not Send</span>
            :
            ''
            }
            </p>
            <form ref={form} onSubmit={formsubmit}>
            <div className='cform'>
                <div>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='email' placeholder='Email' />
                <input type='text' name='subject' placeholder='Subject' />
                </div>
                <input className='messageField' type='text' name='message' placeholder='Your message' />
            </div>
            <button className='submitButton' type='submit'>Send message</button>
            </form>
        </section>
    )
}
