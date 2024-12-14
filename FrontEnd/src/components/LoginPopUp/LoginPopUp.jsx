import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import {useState} from 'react'

const LoginPopUp = ({setShowLogin}) => {
    const [curState,setState]=useState('signup')
  return (
    <div className="login-popup">
    <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{curState ==='signup'? 'Sign Up':'Log In'}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-inputs">
            {curState==='signup' && <input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='E-mail' required />
            <input type="password" placeholder='Your Password' />
        </div>
        <div className='btn'>
        <button>
            {curState==='signup'?'Sign Up':'Log In'}
        </button>
        </div>
        <div className="login-pop-condition">
            <input type="checkbox" required />
            <p>By Continuing , I agree to the terms and Conditions</p>
        </div>
        <div className="extra">
        {
            curState==='signup'?
            <p>Already have an account ?<br /><span onClick={()=>setState('login')}>Login Here</span></p>
            :<p>Create a New Account ? <span onClick={()=>setState('signup')}>Click Here</span>  </p>
            
        }
        </div>
    </form>
    </div>
  )
}

export default LoginPopUp