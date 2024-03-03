import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
import './hygiene.css'

const Hygiene = (props) => {
  return (
    <div className="hygiene-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="hygiene-hygiene">
        <div className="hygiene-frameiconhome">
          <Link to="/home-page">
          <img
            src="/external/vector7346-07tt.svg"
            alt="Vector7346"
            className="hygiene-vector"
          /></Link>
        </div>
        <div className="hygiene-frameiconsoap">
          <img
            src="/external/vector7348-pl0q.svg"
            alt="Vector7348"
            className="hygiene-vector1"
          />
          <img
            src="/external/vector7349-rb72.svg"
            alt="Vector7349"
            className="hygiene-vector2"
          />
          <img
            src="/external/vector7350-gc9.svg"
            alt="Vector7350"
            className="hygiene-vector3"
          />
        </div>
        <span className="hygiene-text">
          <span>Hygiene</span>
        </span>
        <div className="hygiene-month">
          <span className="hygiene-text02">
            <span>February 2021</span>
          </span>
        </div>
        <div className="hygiene-calendar">
          <div className="hygiene-month1">
            <img
              src="/external/arrow7316-h4g9.svg"
              alt="Arrow7316"
              className="hygiene-arrow"
            />
            <span className="hygiene-text04">
              <span>February 2021</span>
            </span>
            <img
              src="/external/arrow7317-kclu.svg"
              alt="Arrow7317"
              className="hygiene-arrow1"
            />
          </div>
          <div className="hygiene-dates">
            <div className="hygiene-row">
              <span className="hygiene-text06">
                <span>MON</span>
              </span>
              <span className="hygiene-text08">1</span>
              <span className="hygiene-text09">8</span>
              <span className="hygiene-text10">
                <span>15</span>
              </span>
              <span className="hygiene-text12">
                <span>22</span>
              </span>
              <span className="hygiene-text14">
                <span>29</span>
              </span>
            </div>
            <div className="hygiene-row1">
              <span className="hygiene-text16">
                <span>TUE</span>
              </span>
              <span className="hygiene-text18">2</span>
              <span className="hygiene-text19">9</span>
              <span className="hygiene-text20">
                <span>16</span>
              </span>
              <span className="hygiene-text22">
                <span>23</span>
              </span>
              <span className="hygiene-text24">
                <span>30</span>
              </span>
            </div>
            <div className="hygiene-row2">
              <span className="hygiene-text26">
                <span>WED</span>
              </span>
              <span className="hygiene-text28">3</span>
              <span className="hygiene-text29">
                <span>10</span>
              </span>
              <span className="hygiene-text31">
                <span>17</span>
              </span>
              <span className="hygiene-text33">
                <span>24</span>
              </span>
              <span className="hygiene-text35">
                <span>31</span>
              </span>
            </div>
            <div className="hygiene-row3">
              <span className="hygiene-text37">
                <span>THU</span>
              </span>
              <span className="hygiene-text39">4</span>
              <span className="hygiene-text40">
                <span>11</span>
              </span>
              <span className="hygiene-text42">
                <span>18</span>
              </span>
              <span className="hygiene-text44">
                <span>25</span>
              </span>
              <span className="hygiene-text46">1</span>
            </div>
            <div className="hygiene-row4">
              <span className="hygiene-text47">
                <span>FRI</span>
              </span>
              <span className="hygiene-text49">5</span>
              <span className="hygiene-text50">
                <span>12</span>
              </span>
              <span className="hygiene-text52">
                <span>19</span>
              </span>
              <span className="hygiene-text54">
                <span>26</span>
              </span>
              <span className="hygiene-text56">2</span>
            </div>
            <div className="hygiene-row5">
              <span className="hygiene-text57">
                <span>SAT</span>
              </span>
              <span className="hygiene-text59">6</span>
              <span className="hygiene-text60">
                <span>13</span>
              </span>
              <span className="hygiene-text62">
                <span>20</span>
              </span>
              <span className="hygiene-text64">
                <span>27</span>
              </span>
              <span className="hygiene-text66">3</span>
            </div>
            <div className="hygiene-row6">
              <span className="hygiene-text67">
                <span>SUN</span>
              </span>
              <span className="hygiene-text69">7</span>
              <span className="hygiene-text70">
                <span>14</span>
              </span>
              <span className="hygiene-text72">
                <span>21</span>
              </span>
              <span className="hygiene-text74">
                <span>28</span>
              </span>
              <span className="hygiene-text76">4</span>
            </div>
          </div>
        </div>
        <span className="Hygiene-Title">
          <span>Input All You've done to take care of Yourself:</span>
        </span>
        <div className="hygiene-frame">
          <div className="hygiene-text77" contenteditable="true">
            <span></span>
          </div>
        </div>
        <Link to="/home-page">
        <button className="hygiene-primary-button">
          <span className="hygiene-text79">
            <span>Save</span>
          </span>
        </button></Link>
        <div className="hygiene-frameiconcog">
          <Link to="/settings">
          <img
            src="/external/vector6855-8xan.svg"
            alt="Vector6855"
            className="hygiene-vector4"
          />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hygiene
