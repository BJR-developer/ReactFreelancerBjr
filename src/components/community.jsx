import React from 'react'
import './css/community.css'
import {useRef, useState} from 'react'
import {Link} from 'react-scroll'
import axios from 'axios'
export default function Community() { // form alert
    const [success, setSuccess] = useState()
    const [passerr, setPasserr] = useState("Loading...")
    // form collection
    const [user, setUser] = useState({name: "", email: "", password: '', cpassword: ''})
    const handleInput = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const signupSend = async (e) => {
        e.preventDefault();

        if (user.password !== user.cpassword) {
            setPasserr("Password Not Match")
        } else {
            axios.post("/signup", user)
            .then(res=>{
                setPasserr("Account "+res.statusText + " Successfully")
                document.querySelector('.finalresultdown').style.backgroundColor = 'green'
            })
                    .catch(function (error) {
                if (error.response) {
                document.querySelector('.finalresultdown').style.backgroundColor = 'red'
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    //duplicate email key
                    if (error.response.status===404) {
                    setPasserr(error.response.data.keyValue.email + " Already exist")
                    }
                    // invalid email
                    else if(error.response.status===402){
                        setPasserr(error.response.data.errors.email.message)
                    }
                    // invalid password min length
                    else if(error.response.status===401){
                        setPasserr(error.response.data.errors.password.message)
                    }
                }
            })
            console.log(passerr);
        }
    }
    const jointodays = () => {
        document.querySelector('.signupform').style.display = 'block'
    }
    const submitMsz = () => {
        document.querySelector('.finalresultdown').style.display = 'block'
    }
    return (
        <>
            <section className='community' id='community'>
                <div className='section-title'>COMMUNITY</div>
                <div className='footbg'>
                    <p className='overlay'>
                        <img src='http://shanereact.ibthemespro.com/img/svg/paper.svg' alt="devider"/>
                        <div className='footer-container'>
                            <div className='communityTitle'>Welcome to the Freelancerbjr communit
                            </div>
                            <div className='subcommunitytitle'>
                                Get access to apps services, blog post, latest news and more.
                            </div>
                            <Link className='jointodays' to='signupform'
                                smooth={true}
                                duration={1000}
                                onClick={jointodays}>JOIN TODAYS</Link>
                        </div>
                    </p>
                </div>
                <div className='signupform'>
                    <form onSubmit={signupSend}>
                        <div className='cformCommunity'>
                            <section className='section-title'
                                style={
                                    {
                                        color: "white",
                                        paddingBottom: "10px"
                                    }
                            }>JOIN NOW</section>
                            <div>
                                <p className='signC'>
                                    Signup to join our community</p>
                                <span className='finalresultdown'>{passerr}</span>
                                <input type='text'
                                    value={
                                        user.name
                                    }
                                    onChange={handleInput}
                                    name='name'
                                    required
                                    placeholder='Full Name'/>
                                <input type='text'
                                    value={
                                        user.email
                                    }
                                    onChange={handleInput}
                                    required
                                    name='email'
                                    placeholder='Email'/>
                                <input type='text'
                                    value={
                                        user.password
                                    }
                                    onChange={handleInput}
                                    required
                                    name='password'
                                    placeholder='Password'/>
                                <input type='text'
                                    value={
                                        user.cpassword
                                    }
                                    onChange={handleInput}
                                    required
                                    name='cpassword'
                                    placeholder='Confirm Password'/>
                            </div>
                        </div>
                        <button onClick={submitMsz} className='submitButton' type='submit'>SIGNUP</button>
                    </form>
                </div>
            </section>
        </>
    )
}

