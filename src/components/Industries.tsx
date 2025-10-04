import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const industries = [
    {
        icon: "/pills.png",
        title: "Medical & Pharma Services",
        desc: "Our industry plays vital services, and Health care industry is an extremely important component in today's life as it has a direct tie to the overall life expectancy of all people.",
    },
    {
        icon: "/pills.png",
        title: "Testing & Fitness",
        desc: "Our industry plays vital services, and Health care industry is an extremely important component in today's life as it has a direct tie to the overall life expectancy of all people.",
    },
    {
        icon: "/pills.png",
        title: "Fintech",
        desc: "Our industry plays vital services, and Health care industry is an extremely important component in today's life as it has a direct tie to the overall life expectancy of all people.",
    },
    {
        icon: "/pills.png",
        title: "Health & Fitness",
        desc: "Our industry plays vital services, and Health care industry is an extremely important component in today's life as it has a direct tie to the overall life expectancy of all people.",
    },
    {
        icon: "/pills.png",
        title: "Business & Services",
        desc: "Our industry plays vital services, and Health care industry is an extremely important component in today's life as it has a direct tie to the overall life expectancy of all people.",
    },
    {
        icon: "/pills.png",
        title: "Cleaning Services",
        desc: "Our industry plays vital services, and Health care industry is an extremely important component in today's life as it has a direct tie to the overall life expectancy of all people.",
    },
];

export default function Industries() {
    return (
        <section className="py-16 px-4 md:px-8 bg-[#EAEDEF]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Industries</h2>
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden">
                    <Swiper
                        modules={[Autoplay, Grid]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                                spaceBetween: 12,
                            },
                            480: {
                                slidesPerView: 1.5,
                                spaceBetween: 16,
                            },
                        }}
                    >
                        {industries.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}