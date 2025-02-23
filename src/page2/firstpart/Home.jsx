import React from 'react'
import './Home.css'
import girl from './assets/girl.jpg'

const Home = () => {
  return (
    <div className='container'>
        <div className='head-part'>
            <p>HOME/ABOUT US</p>
            <h3>WHO WE ARE</h3>
        </div>
        <div className='pic-part'>
            <img src={girl} alt='girl-pic'></img>
        </div>
    </div>
  )
}

export default Home