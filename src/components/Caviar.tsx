import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CaviarSection() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section
            id="portfolio"
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4 md:px-12 flex items-center"
            style={{ backgroundImage: "url('/food.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center md:justify-center">
                {/* Left Side Content */}
                <div className="flex-1 space-y-6 max-w-lg text-center md:text-left">
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="bg-white/80 text-sm px-3 py-1 rounded-full">Food</span>
                        <span className="bg-white/80 text-sm px-3 py-1 rounded-full">Delivery</span>
                        <span className="bg-white/80 text-sm px-3 py-1 rounded-full">App</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                        Caviar - Order Food Delivery
                    </h2>

                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        Get food delivered from curated lists of local restaurants right at your fingertips with Caviar. Enjoy quality dining at home and make any night a special occasion.
                    </p>

                    {/* Store Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="bg-white text-black px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-100 transition">
                            App Store
                        </button>
                        <button className="bg-white text-black px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-100 transition">
                            Google Play
                        </button>
                    </div>

                    {/* Case Study Button */}
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold shadow text-white">
                            VIEW CASE STUDY
                        </button>
                    </div>
                </div>
                {/* Right - Swiper Slider */}
                <div className="flex-1 flex flex-col items-center w-full max-w-md relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={240}
                        slidesPerView={2}
                        loop
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        direction="vertical"
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        className="w-full h-[400px] md:h-[600px] flex items-center px-8 md:px-0"
                    >
                        {[
                            "/mobl.png",
                            "/mobl.png",
                            "/mobl.png",
                            "/mobl.png",
                            "/mobl.png",
                            "/mobl.png",
                        ].map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="flex justify-center items-center h-full">
                                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 flex flex-col items-center w-[90%] mx-auto">
                                        <img
                                            src={img}
                                            alt={`Caviar App ${idx + 1}`}
                                            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Navigation Buttons - Repositioned */}
                    <div className="absolute right-0 md:right-[-50px] top-1/2 flex flex-col gap-4 -translate-y-1/2 z-20">
                        <button
                            ref={prevRef}
                            className="bg-white/80 hover:bg-red-600 hover:text-white text-black p-2 rounded-full shadow transition"
                            aria-label="Previous"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12l8-8M8 12l8 8" /></svg>
                        </button>
                        <button
                            ref={nextRef}
                            className="bg-white/80 hover:bg-red-600 hover:text-white text-black p-2 rounded-full shadow transition"
                            aria-label="Next"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 12l-8-8M16 12l-8 8" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}