import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="resources-resources">
        <span className="resources-text">
          <span>Resources</span>
        </span>
        <span className="resources-text02">
          <span>
            <span>https://www.youtube.com/watch?v=inpok4MKVLM</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="resources-text09">
          <span>Meditation YouTube Videos</span>
        </span>
        <div className="resources-frameiconhome">
          <Link to="/home-page">
          <img
            src="/external/vector5634-suei.svg"
            alt="Vector5634"
            className="resources-vector"
          />
          </Link>
        </div>
        <div className="resources-frameiconcog">
          <Link to="/settings">
          <img
            src="/external/vector6856-zr64.svg"
            alt="Vector6856"
            className="resources-vector1"
          /></Link>
        </div>
        <span className="resources-text11">
          <span>https://www.youtube.com/watch?v=U9YKY7fdwyg</span>
        </span>
        <span className="resources-text13">
          <span>https://www.youtube.com/watch?v=zSkFFW--Ma0</span>
        </span>
      </div>
    </div>
  )
}

export default Resources
