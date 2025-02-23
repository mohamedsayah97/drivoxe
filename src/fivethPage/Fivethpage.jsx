import React from 'react'
import './Fivethpage.css'

export const Fivethpage = () => {
  return (
    <div>
        <div className='lignes'>
            <p>HOW IT WORKS</p>
            <h4>Simple steps to get the car</h4>
        </div>
     <div className='content'>
        <div className='content-part'>
            <h5>Select</h5>
            <p className='seconde'>choose your desired </p>
            <p className='third'>car from our fleet. </p>
            <img src='' alt='here is a pic'></img>
        </div>
        <div className='seconde-part'>
            <h5>Book</h5>
            <p className='first-content'>Reserve your car </p>
            <p className='second-part'>online or throught our </p>
            <p className='thirdth-part'>app.</p>
            <img src='' alt='here is a pic'></img>
        </div>
        <div className='third-part'>
            <h5>Drive</h5>
            <p className='first-line'>Pick up your car</p>
            <p className='seconde-line'> and hit the road</p>
            <img src='' alt='here is a pic'></img>
        </div>
        <div className='fouth-part'>
            <h5>Return</h5>
            <p className='first-cont'>Bring the car back at</p>
            <p className='seconde-cont'>the end of your rental</p>
            <p className='third-cont'>periode</p>
            <img src='' alt='here is a pic'></img>
        </div>
     </div>
    </div>
  )
}
