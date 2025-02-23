import React from 'react'
import './Achiev.css'

const Achiev = () => {
  return (
    <div className='container'>
        <div className='left-part'>
            <p>Achievement</p>
            <h4>Let&#39;s see our Celebrate milestones</h4>
        </div>
        <div className="right-part">
          <div className='top-part'>
           <p style={{position:'absolute',top:'130px',right:'1000px',width:'40px'}}>Customer choice Award</p>
           <p style={{position:'absolute',top:'130px',right:'750px',width:'40px'}}>safety drive Excellence</p>
           <p style={{position:'absolute',top:'130px',right:'500px',width:'40px'}}>Innovation champion</p>
           <p style={{position:'absolute',top:'130px',right:'300px',width:'40px'}}>Travel partner</p>
          </div>
          <div className="down-part">
            <p style={{position:'absolute',top:'300px',right:'1000px',width:'40px'}}>Best Customer Support</p>
            <p style={{position:'absolute',top:'300px',right:'750px',width:'40px'}}>Business Growth Milestone</p>
            <p style={{position:'absolute',top:'300px',right:'500px',width:'40px'}}>Community Engagement</p>
            <p style={{position:'absolute',top:'300px',right:'300px',width:'40px'}}>Industry Leadership</p>
          </div>
        </div>
    </div>
  )
}

export default Achiev