import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ButtonLatest from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left - Mobile Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img 
              src="/mobs.png" 
              alt="Mobile Apps Showcase" 
              className="w-full h-auto max-w-[550px] mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right - Content Slider */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="w-full max-w-[700px]"
            >
              {[1, 2, 3].map((slide) => (
                <SwiperSlide key={slide}>
                  <div className="text-white space-y-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Leading the Way in App{" "}
                      <span className="block text-white">
                        Development Innovation
                      </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-[500px]">
                      We build Android & iOS Mobile Apps that cater all your business needs and take it to the next level.
                    </p>
                    <ButtonLatest
                      title="GET A FREE QUOTE"
                      classes="inline-block py-4 px-8 rounded-lg bg-gradient-to-r from-[#FF0000] to-black hover:shadow-lg hover:shadow-red-500/20 transform hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-8 md:mt-12 justify-center lg:justify-end">
              <button
                ref={prevRef}
                className="p-3 rounded-full bg-white hover:bg-white/20 backdrop-blur-sm transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                ref={nextRef}
                className="p-3 rounded-full bg-white hover:bg-white/20 backdrop-blur-sm transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;