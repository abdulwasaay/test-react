import { Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const services = [
        "iPHONE APPLICATION DEVELOPMENT",
        "ANDROID APPLICATION DEVELOPMENT",
        "ENTERPRISE APP DEVELOPMENT",
    ];

    return (
        <footer className="bg-[#1A1E2C] text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Social */}
                    <div className="space-y-6">
                        <img 
                            src="/logo.png" 
                            alt="Appicoder Inc" 
                            className="h-8"
                        />
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">
                            © 2024 APPICODERS. ALL RIGHTS RESERVED
                        </p>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <nav className="space-y-3">
                            <Link to="#" className="block text-gray-400 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link to="#" className="block text-gray-400 hover:text-white transition-colors">
                                About Us
                            </Link>
                            <Link to="#" className="block text-gray-400 hover:text-white transition-colors">
                                Contact Us
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Appicoders Services</h3>
                        <nav className="space-y-3">
                            {services.map((service, index) => (
                                <Link 
                                    key={index}
                                    to="#" 
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <ChevronRight size={16} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                                    <span>{service}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-gray-400">
                            <p>Email: info@appicoders.com</p>
                            <p>Call Now</p>
                            <p className="text-white">+1 (800) 826 0818</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;