import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const features = [
  {
    title: "Focused Business Approach",
    desc: "Planning, pitch and execute – and results speak. We make application and turn our clients ahead of us.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#e0e7ef" />
        <path d="M12 7v5l4 2" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    active: false,
  },
  {
    title: "Professional Team",
    desc: "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & modern apps for Android, iOS, & web app platforms.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#e0e7ef" />
        <path d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#374151" />
      </svg>
    ),
    active: true,
  },
  {
    title: "Flexible Payment Terms",
    desc: "Get your app delivered with most affordable price and with our flexible payment terms, as per your project progress.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#e0e7ef" />
        <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    active: false,
  },
  {
    title: "Flexible Payment Terms",
    desc: "Get your app delivered with most affordable price and with our flexible payment terms, as per your project progress.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#e0e7ef" />
        <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    active: false,
  },
  {
    title: "Flexible Payment Terms",
    desc: "Get your app delivered with most affordable price and with our flexible payment terms, as per your project progress.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#e0e7ef" />
        <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    active: false,
  },
];

const Chooseus = () => (
  <section className="w-full bg-gradient-to-b from-[#f5f7fa] to-[#e3eaf5] py-14 px-2 md:px-0">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight drop-shadow-sm">
        Why Choose Us?
      </h2>
      <p className="text-gray-600 mb-10 text-base md:text-lg font-medium">
        With our unique approach and cost-effective solutions, your business will prosper because <span className="font-semibold text-red-600">quality</span> is the top priority for us.
      </p>
    </div>
    <div className="max-w-5xl mx-auto">
      <Swiper
        navigation
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {features.map((f, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`flex flex-col items-center text-center px-6 py-10 md:py-12 md:px-8 w-full transition-all duration-300 bg-white/60 shadow-lg"
                rounded-3xl mx-2 backdrop-blur-lg hover:scale-105 hover:shadow-2xl`}
              style={{
                filter: "blur(0.5px)",
                opacity: 0.85,
                boxShadow: f.active
                  ? "0 8px 32px rgba(239,68,68,0.10)"
                  : "0 2px 12px rgba(0,0,0,0.07)",
                border: " 1px solid #e0e7ef",
              }}
            >
              <div className="mb-5">{f.icon}</div>
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-700">
                {f.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{f.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Chooseus;