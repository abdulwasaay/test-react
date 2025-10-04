
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css"

const testimonials = [
    {
        name: "Scarlett Lawrence",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: `Thank you Team Appicoders; you guys have a great understanding of what's current, and get things done very quickly compared to others. Polite in communication and can deliver suggestions on useful functionality during the planning stage. Loved the final product that surpassed initial expectations. Their project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendation if you're looking for quality work.`,
    },
    {
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: `Thank you Team Appicoders; you guys have a great understanding of what's current, and get things done very quickly compared to others. Polite in communication and can deliver suggestions on useful functionality during the planning stage. Loved the final product that surpassed initial expectations. Their project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendation if you're looking for quality work.`,
    },
    {
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
        text: `Thank you Team Appicoders; you guys have a great understanding of what's current, and get things done very quickly compared to others. Polite in communication and can deliver suggestions on useful functionality during the planning stage. Loved the final product that surpassed initial expectations. Their project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendation if you're looking for quality work.`,
    },
];

const Clients = () => (
    <section id="testimonials"
        className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center py-12 px-4 md:px-0"
        style={{
            backgroundImage: "url('/bgl.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-center items-start">
                <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg mr-3">
                  
                       <img src="/ellipse1.png" alt="ellips" className="w-11"/>
                    </div>

                </div>
                <div className="uppercase text-white font-semibold tracking-wide text-sm">Client Testimonials</div>
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 leading-tight">
                    What our clients are <span className="block">Saying.</span>
                </h2>
            </div>
            {/* Right Side - Swiper Slider */}
            <div className="flex-1 flex justify-center items-center">
                <Swiper
                    spaceBetween={40}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination', 
                        type: 'bullets', 
                    }}
                    className="w-full max-w-lg custom-pagination"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white/95 rounded-xl shadow-2xl border border-gray-200 px-8 py-7 w-full relative"
                                style={{
                                    borderTop: "6px solid #ef4444",
                                    minHeight: "220px",
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border-2 border-red-500 object-cover mr-3"
                                    />
                                    <span className="font-bold text-gray-800 text-lg">{testimonial.name}</span>
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed">{testimonial.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
);

export default Clients;