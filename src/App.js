import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import AboutComp from "./components/AboutComp";
import PricingComp from "./components/PricingComp";
import ContactComp from "./components/ContactComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroComp />
      <AboutComp />
      <PricingComp />
      <ContactComp />
      <FooterComp />
    </div>
  );
}

export default App;
