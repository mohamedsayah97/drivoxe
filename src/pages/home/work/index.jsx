import './index.css'
import emoji1 from '../../../assets/emoji1.png'
import emoji2 from '../../../assets/emoji2.png'
import emoji3 from '../../../assets/emoji3.png'
import emoji4 from '../../../assets/emoji4.png'
const Work = () => {
  return (
    <div className='container'>
        <div className='top-part'>
            <p className='first-part'>How it Works</p>
            <p className='last-par'>Simple Steps to Get The Car</p>
        </div>
        
        <div className='down-part1'>
          <div className="select">
            <h4>Select</h4>
            <p>Choose your desired car from our fleet.</p>
            <img className='emoji1' src={emoji1} alt='emoji1'></img>
          </div>
          <div className="book">
            <h4 className='h42'>Book</h4>
            <p className='p2'>Reserve your car online or through our app.</p>
            <img className='emoji2' src={emoji2} alt='emoji2'></img>
          </div>
          <div className="drive">
            <h4 className='h43'>Drive</h4>
            <p className='p3'>Pick up your car
            and hit the road.</p>
            <img className='emoji3' src={emoji3} alt='emoji3'></img>
          </div>
          <div className="return">
            <h4 className='h44'>Return</h4>
            <p className='p4'>Bring the car back at the end of your rental period.</p>
            <img className='emoji4' src={emoji4}></img>
          </div>
        </div>
        
    </div>
  )
}

export default Work