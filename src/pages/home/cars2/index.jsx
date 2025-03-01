import './index.css'
import car9 from '../../../assets/car9.png'
import car10 from '../../../assets/car10.png'
import car11 from '../../../assets/car11.png'
import car112 from '../../../assets/car112.png'
import car12 from '../../../assets/car12.png'
import car13 from '../../../assets/car13.png'

const Lcars = () => {
  return (
    <div>
    <div className='container'>
        <div className="cards">
            <div className="top-part">
                <div className="card">
                    <img src={car9}></img>
                    <h6>Horizon mirage convertible</h6>
                    <p className='first1-par'>Starting at</p>
                    <p className='sec2-par'>$49/day</p>
                    <button className='btn1'>Rent</button>
                </div>
                <div className="card2">
                    <img src={car10}></img>
                    <h6>Horizon mirage convertible</h6>
                    <p className='first12-par'>Starting at</p>
                    <p className='sec12-par'>$49/day</p>
                    <button className='btn2'>Rent</button>
                </div>
                <div className="card3">
                    <img src={car11}></img>
                    <h6>Horizon mirage convertible</h6>
                    <p className='first13-par'>Starting at</p>
                    <p className='sec13-par'>$49/day</p>
                    <button className='btn3'>Rent</button>
                </div>
            </div>
            <div className="down-part">
            <div className="card4">
                    <img src={car112}></img>
                    <h6>Horizon mirage convertible</h6>
                    <p className='first14-par'>Starting at</p>
                    <p className='sec14-par'>$49/day</p>
                    <button className='btn4'>Rent</button>
                </div>
                <div className="card5">
                    <img src={car12}></img>
                    <h6>Horizon mirage convertible</h6>
                    <p className='first15-par'>Starting at</p>
                    <p className='sec15-par'>$49/day</p>
                    <button className='btn5'>Rent</button>
                </div>
                <div className="card6">
                    <img src={car13}></img>
                    <h6>Horizon mirage convertible</h6>
                    <p className='first16-par'>Starting at</p>
                    <p className='sec16-par'>$49/day</p>
                    <button className='btn6'>Rent</button>
                </div>
            </div>
        </div>
        
        </div>
        <div className='btn-suc'>
        <span className='btn-p'>1</span>
        <span className='btn-p'>2</span>
      
    </div>
    </div>
  )
}

export default Lcars