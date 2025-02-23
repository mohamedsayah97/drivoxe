import React from 'react'
import './Secofsec.css'
import car4 from './assets/car4.png'

const Secofsec = () => {
  return (
    <div className='container'>
        <div className='pic-part'>
            <img src={car4} alt='car-pic'></img>
           
        </div>
        <div className='bloc-part'>
       <p style={{position:'absolute' , top:'55px' , right:'350px'}}>Our Journey</p>
       <h5 style={{width:'100px', fontSize:'18px',position:'absolute' , top:'80px' , right:'350px'}}>Pioneering Premium Car Rentals</h5>
       <p style={{width:'30%',position:'absolute' , top:'150px' , right:'100px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       
       </div>
    </div>
  )
}

export default Secofsec