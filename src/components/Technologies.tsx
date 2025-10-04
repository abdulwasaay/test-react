import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const technologies = [
    {
        title: "Cloud Solutions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du",
        image: "/cloud.png"
    },
    {
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du",
        image: "/cloud.png"
    },
    {
        title: "Mobile Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du",
        image: "/cloud.png"
    }
];

export default function Technologies() {
    return (
        <section className="relative bg-[#030B21] py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/tech-pattern.png')] opacity-10" />
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/20 to-transparent" />
                </div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                        Technologies
                    </h2>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet !bg-white/50',
                            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
                        }}
                        className="technology-slider !pb-12"
                    >
                        {technologies.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto">
                                    {/* Left Side - White Card */}
                                    <div className="bg-white rounded-xl shadow-xl px-8 md:px-10 py-20 w-full md:w-[55%] z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                            {tech.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {tech.description}
                                        </p>
                                        <div className="w-16 h-1 bg-red-600 rounded-full"></div>
                                    </div>

                                    {/* Right Side - Image */}
                                    <div className="w-full z-[999] md:w-1/2 flex justify-center md:absolute md:right-0 md:-translate-x-0 transition-all duration-300">
                                        <img
                                            src={tech.image}
                                            alt={tech.title}
                                            className="max-h-[300px] md:max-h-[350px] w-auto object-contain"
                                        />
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