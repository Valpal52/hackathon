import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
import './exercise.css'

const Exercise = (props) => {
  return (
    <div className="exercise-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="exercise-exercise">
        <div className="exercise-tab">
          <div className="exercise-frameiconbicycle">
            <img
              src="/external/vector5313-5kuo.svg"
              alt="Vector5313"
              className="exercise-vector"
            />
          </div>
        </div>
        <span className="exercise-text">
          <span>Exercise</span>
        </span>
        <span className="exercise-text02">
          <span>
            <span>Type of Workout:</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="exercise-text11">
          <span>Description of Workout:</span>
        </span>
        <div className="exercise-textfield">
          <span className="exercise-text13" contenteditable="true">
            <span></span>
          </span>
        </div>
        <div className="exercise-frame">
          <span className="exercise-text15" contenteditable="true">
            <span></span>
          </span>
        </div>
        <Link to="/home-page">
        <button className="exercise-primary-button">
          <span className="exercise-text17">
            <span>Save</span>
          </span>
        </button>
        </Link>
        <div className="exercise-calendar">
          <div className="exercise-month">
            <img
              src="/external/arrow6843-37hg.svg"
              alt="Arrow6843"
              className="exercise-arrow"
            />
            <span className="exercise-text19">
              <span>February 2021</span>
            </span>
            <img
              src="/external/arrow6843-1a7e.svg"
              alt="Arrow6843"
              className="exercise-arrow1"
            />
          </div>
          <div className="exercise-dates">
            <div className="exercise-row">
              <span className="exercise-text21">
                <span>MON</span>
              </span>
              <span className="exercise-text23">1</span>
              <span className="exercise-text24">8</span>
              <span className="exercise-text25">
                <span>15</span>
              </span>
              <span className="exercise-text27">
                <span>22</span>
              </span>
              <span className="exercise-text29">
                <span>29</span>
              </span>
            </div>
            <div className="exercise-row1">
              <span className="exercise-text31">
                <span>TUE</span>
              </span>
              <span className="exercise-text33">2</span>
              <span className="exercise-text34">9</span>
              <span className="exercise-text35">
                <span>16</span>
              </span>
              <span className="exercise-text37">
                <span>23</span>
              </span>
              <span className="exercise-text39">
                <span>30</span>
              </span>
            </div>
            <div className="exercise-row2">
              <span className="exercise-text41">
                <span>WED</span>
              </span>
              <span className="exercise-text43">3</span>
              <span className="exercise-text44">
                <span>10</span>
              </span>
              <span className="exercise-text46">
                <span>17</span>
              </span>
              <span className="exercise-text48">
                <span>24</span>
              </span>
              <span className="exercise-text50">
                <span>31</span>
              </span>
            </div>
            <div className="exercise-row3">
              <span className="exercise-text52">
                <span>THU</span>
              </span>
              <span className="exercise-text54">4</span>
              <span className="exercise-text55">
                <span>11</span>
              </span>
              <span className="exercise-text57">
                <span>18</span>
              </span>
              <span className="exercise-text59">
                <span>25</span>
              </span>
              <span className="exercise-text61">1</span>
            </div>
            <div className="exercise-row4">
              <span className="exercise-text62">
                <span>FRI</span>
              </span>
              <span className="exercise-text64">5</span>
              <span className="exercise-text65">
                <span>12</span>
              </span>
              <span className="exercise-text67">
                <span>19</span>
              </span>
              <span className="exercise-text69">
                <span>26</span>
              </span>
              <span className="exercise-text71">2</span>
            </div>
            <div className="exercise-row5">
              <span className="exercise-text72">
                <span>SAT</span>
              </span>
              <span className="exercise-text74">6</span>
              <span className="exercise-text75">
                <span>13</span>
              </span>
              <span className="exercise-text77">
                <span>20</span>
              </span>
              <span className="exercise-text79">
                <span>27</span>
              </span>
              <span className="exercise-text81">3</span>
            </div>
            <div className="exercise-row6">
              <span className="exercise-text82">
                <span>SUN</span>
              </span>
              <span className="exercise-text84">7</span>
              <span className="exercise-text85">
                <span>14</span>
              </span>
              <span className="exercise-text87">
                <span>21</span>
              </span>
              <span className="exercise-text89">
                <span>28</span>
              </span>
              <span className="exercise-text91">4</span>
            </div>
          </div>
        </div>
        <div className="exercise-frameiconcog">
          <Link to="/settings">
          <img
            src="/external/vector6855-fyrc.svg"
            alt="Vector6855"
            className="exercise-vector1"
          />
          </Link>
        </div>
        
        <div className="exercise-frameiconhome">
          <Link to="/home-page">
          <img
            src="/external/vector6856-u6ms.svg"
            alt="Vector6856"
            className="exercise-vector2"
          /></Link>
        </div>
      </div>
    </div>
  )
}

export default Exercise
