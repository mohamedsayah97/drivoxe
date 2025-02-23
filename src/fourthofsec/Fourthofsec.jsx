import React from 'react'
import './Fourthofsec.css'

const Fourthofsec = () => {
  return (
    <div className='container'>
        <p>HOW IT WORKS</p>
        <h4>Simple Steps to Get the Car</h4>
        <div className='top-part'>
            <h5>Select</h5>
            <p>choose your desired from our fleet</p>
          
        </div>
        <div className='sec-top'>
                <h5>Drive</h5>
                <p>Pick your car and hit the road</p>
             </div>
             {/*<hr></hr>*/}
        <div className='down-part'>
            <h5>BOOK</h5>
            <p>Reserve your car online or throught app</p>
        </div>
        <div className='sec-down'>
            <h5>Return</h5>
            <p>Bring the car back at the end of your rental period.</p>
        </div>
    </div>
  )
}

export default Fourthofsec