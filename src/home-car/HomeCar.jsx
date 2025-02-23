import React from 'react'
import './Home-car.css'
import car6 from '../assets/car6.jpg'

const HomeCar = () => {
  return (
    <div className='container'>
      <p>Home / Car</p>
      <h3>Our Impressive fleet</h3>
      <img src={car6} alt='car-pic'></img>
    </div>
  )
}

export default HomeCar