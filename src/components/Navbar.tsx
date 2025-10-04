import { NavLink } from "react-router-dom"
import ButtonLatest from "./Button"
import { Phone } from "lucide-react"

const NavbarLat = () => {
    return (
        <div className="pl-[30px] pr-[60px] py-5">
            <div className=" flex justify-between items-center">
                <img src="/logo.png" alt="logo" />
                <div className="flex flex-col items-end">
                    <nav className="flex gap-6">
                        <NavLink to="/" className="text-white hover:font-medium">Home</NavLink>
                        <NavLink to="/about" className="text-white hover:font-medium">About</NavLink>
                        <NavLink to="/services" className="text-white hover:font-medium">Services</NavLink>
                        <NavLink to="/choose" className="text-white hover:font-medium">Why Choose Us</NavLink>
                        <NavLink to="/portfolio" className="text-white hover:font-medium">Portfolio</NavLink>
                        <NavLink to="/products" className="text-white hover:font-medium">Products</NavLink>
                        <NavLink to="/testimonials" className="text-white hover:font-medium">Testimonials</NavLink>
                        <NavLink to="/technologies" className="text-white hover:font-medium">Technologies</NavLink>
                        <NavLink to="/contact" className="text-white hover:font-medium">Contact</NavLink>
                    </nav>
                    <ButtonLatest title={<><Phone /><span>+1 (800) 826-8018</span></>} classes=" mt-2 flex gap-3 py-[9px] px-[23px] border border-[white] rounded-[50px] text-white hover:bg-red-600" />
                </div>
            </div>
        </div>
    )
}

export default NavbarLat