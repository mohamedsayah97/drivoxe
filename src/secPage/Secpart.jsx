import React from 'react'
import './Secpart.css'


const Secpart = () => {
  return (
    <div>
        <div className="txt">
        <h3>Your journey,</h3>
        <h3>Your Car,</h3>
        <h3>Your Way</h3>
        <br/>
        <br/>
        <p style={{color: "grey"}}>Experience the ultimate freedom of</p>
        <p style={{color: "grey"}}>choice with GoCar tailor your</p>
        <p style={{color: "grey"}}>adventure by choosing from our</p>
        <p style={{color: "grey"}}>premium fleet of vehicles.</p>
        
        <br/>
        <br/>
        <button style={{backgroundColor: " rgb(211, 25, 25)",color: "white" , borderRadius: "25px" , border: "none" , margin: "5px" , padding: "10px;"}}>Get Started</button>
    </div>
    
    <div className="all_btn">
      <div className="btn_bas">
        <button>Rent</button>
        <button>Buy</button><br/>
        <button>Sell</button>
        <button>Consume</button>
      </div>
      <div className="btn_blk">
        <button style={{color: "black" ,border: "none" , backgroundColor: "white"}}>Learn more</button>
      </div>
      
    </div>
    </div>
    
  )
}

export default Secpart