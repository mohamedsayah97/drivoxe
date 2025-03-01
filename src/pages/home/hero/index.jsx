import "./index.scss";
import logo1 from '../../../assets/logoipsum-256.svg'
import logo2 from '../../../assets/logoipsum-258.svg'
import logo3 from '../../../assets/logoipsum-260.svg'
import logo4 from '../../../assets/logoipsum-261.svg'
import logo5 from '../../../assets/logoipsum-262.svg'
import logo6 from '../../../assets/logoipsum-265.svg'

const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-container">
        <div className="hero-left">
          <div className="desc">
            <h2 aria-label="Your Journey, Your Car, Your Way">
              Your Journey,
              <br /> Your Car,
              <br /> Your Way
            </h2>
            <p>
              Experience the ultimate freedom of choice with GoCar - tailor your
              adventure by choosing from our premium fleet of vehicles.
            </p>
            <button>Get Started</button>
          </div>
          <div className="partners">
            <img src="https://picsum.photos/200/300" alt="card_placeholder" />
            <img src="https://picsum.photos/200/300" alt="card_placeholder" />
            <img src="https://picsum.photos/200/300" alt="card_placeholder" />
            <img src="https://picsum.photos/200/300" alt="card_placeholder" />
          </div>
        </div>
        <div className="hero-middle">middle hero</div>
        <div className="hero-right">right hero</div>
      </div>
      <div className="hero-down">
        <img src={logo1}></img>
        <img src={logo2}></img>
        <img src={logo3}></img>
        <img src={logo4}></img>
        <img src={logo5}></img>
        <img src={logo6}></img>
      </div>
      {/* <div className="txt">
        <h3>Your journey,</h3>
        <h3>Your Car,</h3>
        <h3>Your Way</h3>
        <br />
        <br />
        <p style={{ color: "grey" }}>Experience the ultimate freedom of</p>
        <p style={{ color: "grey" }}>choice with GoCar tailor your</p>
        <p style={{ color: "grey" }}>adventure by choosing from our</p>
        <p style={{ color: "grey" }}>premium fleet of vehicles.</p>

        <br />
        <br />
        <button
          style={{
            backgroundColor: " rgb(211, 25, 25)",
            color: "white",
            borderRadius: "25px",
            border: "none",
            margin: "5px",
            padding: "10px;",
          }}
        >
          Get Started
        </button>
      </div>

      <div className="all_btn">
        <div className="btn_bas">
          <button>Rent</button>
          <button>Buy</button>
          <br />
          <button>Sell</button>
          <button>Consume</button>
        </div>
        <div className="btn_blk">
          <button
            style={{ color: "black", border: "none", backgroundColor: "white" }}
          >
            Learn more
          </button>
        </div>
      </div> */}
    </div>
    
    
  );
};

export default Hero;
