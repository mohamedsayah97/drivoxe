import "./index.scss";

const NavBar = () => {
  return (
    <div id="navbar">
      <h1>DRIVOXE.</h1>
      <div className="attributs">
        <a href="#services">Services</a>
        <a href="#cars">Cars</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>
      <div className="btns">
        <button>Contact</button>
        <div className="divider"></div>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default NavBar;
