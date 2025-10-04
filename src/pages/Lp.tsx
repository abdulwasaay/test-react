import Awards from "../components/Awards"
import CaviarSection from "../components/Caviar"
import Chooseus from "../components/Chooseus"
import Clients from "../components/Clients"
import Contact from "../components/contact"
import Footer from "../components/footer"
import HeroSection from "../components/herosection"
import Industries from "../components/Industries"
import InfoSec from "../components/infoSection"
import NavbarLat from "../components/Navbar"
import Products from "../components/products"
import ServicesSection from "../components/services"
import Technologies from "../components/Technologies"

const LandingPage = () => {
  return (
    <div >
      <div className="landing-page bg-[#20222D]">
        <div className='content'>
          <NavbarLat />
          <HeroSection />
        </div>
      </div>
      <InfoSec />
      <ServicesSection />
      <CaviarSection />
      <Chooseus />
      <Clients />
      <Industries />
      <Technologies />
      <Products />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage