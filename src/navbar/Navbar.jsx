import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div> 
        <div className="header">
    <h4>DRIVOXE</h4>
    <div className="attributs">
        <a href="#">Service</a>
        <a href="#">Cars</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
    </div>
   <div className="butns">
    <button style={{backgroundColor: "white", color: "orangered", border: "none",  bordeRadius: "15px;"}}>Contact</button>
    <button style={{backgroundColor: "rgb(231, 28, 28)", color: "white", border: "none", borderRadius: "15px"}}>Sign up </button>
   </div>
</div>
</div>
  )
}

export default Navbar