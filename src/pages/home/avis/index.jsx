import './index.css'
import women from '../../../assets/women.jpg'
const Avis = () => {
  return (
    <div className='container'>
     <div className='top-part'>
        <p className='first-par'>WHAT OUR CUSTOMERS SAY</p>
        <p className='sec-par'>&quot;My Drivoxe experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable. I&#39;ll be back for more.&quot;</p>

     </div>
     <div className='down-part'>
        <img src={women} alt='image-here'></img>
        <p>Aleea Thompson</p>
     </div>
    </div>
  )
}

export default Avis