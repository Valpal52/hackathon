import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="settings-settings">
        <span className="settings-text">
          <span>Settings</span>
        </span>
        <span className="settings-text02">
          <span>Notification Settings:</span>
        </span>
        <div className="settings-input-default-off">
          <span className="settings-text04">
            <span>Goal 3:</span>
          </span>
          <div className="settings-textfield">
            <span className="settings-text06" contenteditable="true">
              <span></span>
            </span>
          </div>
        </div>
        <div className="settings-input-default-off1">
          <span className="settings-text08">
            <span>Goal 2:</span>
          </span>
          <div className="settings-textfield1">
            <span className="settings-text10" contenteditable="true">
              <span></span>
            </span>
          </div>
        </div>
        <div className="settings-input-default-off2">
          <span className="settings-text12">
            <span>Goal 1:</span>
          </span>
          <div className="settings-textfield2">
            <span className="settings-text14" contenteditable="true">
              <span></span>
            </span>
          </div>
        </div>
        <div className="settings-input">
          <span className="settings-text16">
            <span>Name:</span>
          </span>
          <div className="settings-textfield3">
            <span className="settings-text18" contenteditable="true">
              <span></span>
            </span>
          </div>
        </div>
        <Link to="/home-page">
        <button className="settings-primary-button">
          <span className="settings-text20">
            <span>Submit</span>
          </span>
        </button>
        </Link>
        <div className="settings-radiowithlabel">
          <div className="settings-radio"></div>
          <span className="settings-text22">
            <span>On</span>
          </span>
        </div>
        <div className="settings-input-default-off3">
          <span className="settings-text24">
            <span>Notify me at (EST Time): </span>
          </span>
          <div className="settings-textfield4">
            <span className="settings-text26" contenteditable="true">
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
