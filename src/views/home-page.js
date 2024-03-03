import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"

import './home-page.css'

const HomePage = (props) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-page-home-page">
        <div className="home-page-tab">
          <div className="home-page-frameiconbicycle">
            <Link to="/exercise">
            <img
              src="/external/vector2843-hejp.svg"
              alt="Vector2843"
              className="home-page-vector"
            />
            </Link>
          </div>
        </div>
        <div className="home-page-tabs"></div>
        <div className="home-page-tab1">
          <Link to="/resources">
          <img
            src="/external/icon2834-1gv.svg"
            alt="Icon2834"
            className="home-page-icon"
          />
          </Link>
          <span className="home-page-text">
            <span>Resources</span>
          </span>
        </div>
        <div className="home-page-tab2">
          <Link to="/journal-input-default">
          <img
            src="/external/icon5313-frgn.svg"
            alt="Icon5313"
            className="home-page-icon1"
          />
          </Link>
          <span className="home-page-text2">
            <span>Journal</span>
          </span>
        </div>
        <div className="home-page-tab3">
          <span className="home-page-text4">
            <span>Hygiene</span>
          </span>
        </div>
        <span className="home-page-text6">
          <span>Exercise</span>
        </span> 
        <Link to="/hygiene">
        <div className="home-page-frameiconsoap">
          <img
            src="/external/vector6316-h1u.svg"
            alt="Vector6316"
            className="home-page-vector1"
          />
          <img
            src="/external/vector6317-tmqm.svg"
            alt="Vector6317"
            className="home-page-vector2"
          />
          <img
            src="/external/vector6318-12z.svg"
            alt="Vector6318"
            className="home-page-vector3"
          />
        </div>
       </Link>
        <div className="home-page-frameiconcog">
          <Link to="/settings">
          <img
            src="/external/vector6855-1szxo.svg"
            alt="Vector6855"
            className="home-page-vector4"
          />
          </Link>
          
        </div>
        
      </div>
    </div>
  )
}

export default HomePage
