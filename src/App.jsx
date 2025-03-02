import "./App.css";
import Avis from "./pages/home/avis";
import Cars from "./pages/home/cars";
import Lcars from "./pages/home/cars2";
import Footer from "./pages/home/footer/Footer";
import Hero from "./pages/home/hero";
import Herotwo from "./pages/home/hero2";
import Hero3 from "./pages/home/hero3";
import NavBar from "./pages/home/navbar";
import Work from "./pages/home/work";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Cars/>
      <Lcars/>
      <Herotwo/>
      <Avis/>
      <Work/>
      <Hero3/>
      <Footer/>
    </>
  );
}

export default App;
