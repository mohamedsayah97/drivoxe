
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='left-part1'>
            <h4>Don&#39;t miss a thing</h4>
            <p>Subscribe to our newsletter for exclusive deals and updates.</p>
            <input type='email' placeholder='Entrer email adresse for newslettre...'></input>
        </div>
        <div className='right-part'>
            <div className="first-bloc">
                <h4>Quick Link</h4>
                <ul className='first-list'>
                    <li>About us</li>
                    <li>Who we are</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="sec-bloc">
                <h4>The Cars</h4>
                <ul className='sec-list'>
                    <li>How it works</li>
                    <li>Pick a car</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="third-bloc">
                <h4>Social Media</h4>
                <ul className='third-list'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="last-line">
                <p>Copyright @2025 GoCar.All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer