import React from 'react'
import {loginURL} from '../../spotify'
import './login.css'

export default function Login() {
  return (
    <div className='login-page'>
      <img src={`${process.env.PUBLIC_URL}/museco.PNG`} alt="logo" className="logo" />
      <a href = {loginURL}>
        <div className="login-btn">
          Log In
        </div>

      </a>
    </div>
  )
}

