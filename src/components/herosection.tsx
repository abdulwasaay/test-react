import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ButtonLatest from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="pl-[30px] pr-[30px]">
      <div className="mt-10 flex gap-20 items-center">
        <img src="/mobs.png" alt="mobs" width={"550px"} />
        <div>
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
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
            className="w-[700px]"
          >
            {[1, 2, 3].map((slide) => (
              <SwiperSlide key={slide}>
                <div className="text-white">
                  <h1 className="text-6xl font-medium leading-none">
                    Leading the Way in App{" "}
                    <span className="text-5xl">Development Innovation</span>
                  </h1>
                  <p className="mt-[44px] text-lg w-[500px]">
                    We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
                  </p>
                  <ButtonLatest
                    title="GET A FREE QUOTE"
                    classes="mt-[40px] py-[14px] px-[40px] rounded-lg bg-gradient-to-r from-[#FF0000] to-black filter"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-4 mt-24 justify-end w-[500px]">
            <ButtonLatest
              title={<ArrowLeft className="text-black" />}
              classes="bg-white p-3 rounded-full"
            />
            <ButtonLatest
              title={<ArrowRight className="text-black" />}
              classes="bg-white p-3 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
