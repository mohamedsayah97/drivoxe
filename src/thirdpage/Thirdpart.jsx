import React from 'react'
import './Thirdpart.css'
import car2 from '../assets/car2.png'

const Thirdpart = () => {
  return (
    <div>
      <div className="cars">
        <p style={{textAlign: "center"}}>the cars</p>
        <h3 style={{textAlign: "center;"}}>Our Impressive Fleet</h3>

    </div>
    
    <div className="page">
      <div className="left_part">
        <h4 style={{position: "absolute", bottom: "-220 px" }}>Why choose </h4>
        <h4 style={{position: "absolute", bottom: "-240px"}}>DRIVOXE ?</h4>
        <p style={{position: "absolute", bottom: "-400px;"}}>Join our satisfied customers</p>
        <p style={{position: "absolute", bottom: "-420px;"}}>who trust us for their journeys.</p>
        <p style={{position: "absolute", bottom: "-440px;"}}>We serve with a lot of values</p>
        <p style={{position: "absolute", bottom: "-460px;"}}>that you can feel directly</p>
      </div>
      <div className="right_part">
        <img src={car2}/>
      </div>
    </div>
    </div>
  )
}

export default Thirdpart
