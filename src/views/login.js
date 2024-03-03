import React from 'react'

import { Helmet } from 'react-helmet'

import { Link } from "react-router-dom"

import './login.css'


const Login = (props) => {


  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <div className="login-loading-page">
          <img
            src="/external/blackwhiteminimalistaestheticinitialsfontlogo1remo915-nwzf-500w.png"
            alt="BlackWhiteMinimalistAestheticInitialsFontLogo1remo915"
            className="login-black-white-minimalist-aesthetic-initials-font-logo1remo"
          />

          <Link to="/home-page"> <button type="button" className="button">
            Start</button> </Link>
          
        </div>

      </div>
    </div>
  )
}

export default Login
