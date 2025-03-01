import './index.css'
import emoji1 from '../../../assets/emoji1.png'
import emoji2 from '../../../assets/emoji2.png'
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
        </div>
        
    </div>
  )
}

export default Work