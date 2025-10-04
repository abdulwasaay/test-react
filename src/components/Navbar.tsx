import { NavLink } from "react-router-dom"
import ButtonLatest from "./Button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

const NavbarLat = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "#about", label: "About" },
        { path: "#services", label: "Services" },
        { path: "#choose", label: "Why Choose Us" },
        { path: "#portfolio", label: "Portfolio" },
        { path: "#products", label: "Products" },
        { path: "#testimonials", label: "Testimonials" },
        { path: "#technologies", label: "Technologies" },
        { path: "#contact", label: "Contact" },
    ];

    return (
        <header className=" ">
            <div className="px-4 md:px-8 lg:px-12 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <img src="/logo.png" alt="logo" className="h-12 w-auto" />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-col items-end">
                        <nav className="flex gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="text-white hover:font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <ButtonLatest 
                            title={
                                <div className="flex items-center gap-2">
                                    <Phone size={18} />
                                    <span>+1 (800) 826-8018</span>
                                </div>
                            } 
                            classes="mt-4 flex gap-3 py-2 px-6 border border-white rounded-full text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300" 
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 top-[72px] bg-[#20222D]/95 backdrop-blur-md z-[999]">
                        <nav className="flex flex-col gap-3 p-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) => 
                                        `text-white py-3 px-4 hover:bg-white/10 rounded-lg transition-colors ${
                                            isActive ? "bg-white/10 font-medium" : ""
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <ButtonLatest 
                                title={
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone size={18} />
                                        <span>+1 (800) 826-8018</span>
                                    </div>
                                } 
                                classes="mt-4 py-3 px-6 border border-white rounded-full text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 w-full" 
                            />
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default NavbarLat