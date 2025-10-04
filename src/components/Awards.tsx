import "./styles.css"

const Awards = () => {
    const awards = [
        { image: '/award.png', alt: 'IT Firms Award' },
        { image: '/award.png', alt: 'Top Mobile App' },
        { image: '/award.png', alt: 'Clutch Award' },
        { image: '/award.png', alt: 'Happy Client' },
    ];

    const duplicatedAwards = [...awards, ...awards];

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    Awards and Recognitions
                </h3>

                <div className="relative w-full">
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
                    <div className="marquee-container">
                        <div className="marquee">
                            {duplicatedAwards.map((award, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 mx-8 rounded-full transition-shadow duration-300"
                                >
                                    <img
                                        src={award.image}
                                        alt={award.alt}
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Awards;