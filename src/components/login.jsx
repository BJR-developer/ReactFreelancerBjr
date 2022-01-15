import React, { useState } from 'react'
import { Link } from "react-scroll";
import axios from 'axios'
import './css/login.css'
export default function Header() {
  const [user , setUser] = useState({
    email:"",password:""
  })
  const handleInput = (e)=>{
    const {name , value} = e.target;
    setUser({
      ...user ,
      [name] : value
    })
  }
  const login =  (e)=>{
    e.preventDefault();
    axios.post("/login" ,user)
    .then(res=>{
      console.log(res);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })   
  }
  const jointodays = () => {
    document.querySelector('.signupform').style.display = 'block'
    setTimeout(close , 1000)
    
}
  return (
    <div>
     {/* signup form */} 
     <div id="id01" className="modal1">
            <div className="modal-content animate">
              <div className="imgcontainer">
                <span onClick={()=>{ close() }} className="close" title="Close Modal">×</span>
                <i className="fas fa-user avatar" />
              </div>
              <div className="container">
                <input className="inputBox" type="text" placeholder="Enter email" name="email" value={user.email} onChange={handleInput} required />
                <input className="inputBox" type="password" placeholder="Enter password" name="password" value={user.password} onChange={handleInput} required />
                <button type="submit" onClick={login} className="subbutton">LOGIN</button>
              </div>
              <div className="container" style={{ paddingBottom: '40px', backgroundColor: '#f1f1f1' }}>
                <button type="button" onClick={() => {close() }} className="cancelbtn">Cancel</button>
                <div style={{ float: 'right', paddingTop: '10px' }}>Don't have a account? <Link smooth={true}  onClick={jointodays}  duration={1000} to="signupform" style={{cursor:"pointer" , color:"#930000"}}>Signup</Link></div>
              </div>
            </div>
          </div>
    </div>
  )
}
function close() {
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id02').style.display = 'none'
}
