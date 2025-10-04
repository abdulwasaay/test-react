import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="bg-gradient-to-b from-red-600 to-red-700 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Got an idea? Let's get in touch!
                            </h2>
                            <p className="text-white/90 text-lg">
                                Have a project? We would love to help. Drop us a line below and we'll be in touch soon!
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm">Call us</p>
                                    <a href="tel:+1(800)8260818" className="text-white font-medium">
                                        +1 (800) 826 0818
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm">Email us</p>
                                    <a href="mailto:info@example.com" className="text-white font-medium">
                                        info@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm">Visit us</p>
                                    <p className="text-white font-medium">
                                        123 Business Street, New York, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-xl p-8 shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                                    />
                                </div>
                            </div>

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                            />

                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition resize-none"
                            />

                            <button
                            type='button'
                                className="w-full bg-gradient-to-r from-[#FF0000] to-black filter text-white py-4 px-8 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group"
                            >
                                LET'S TALK
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;