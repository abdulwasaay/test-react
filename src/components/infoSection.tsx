import ButtonLatest from "./Button"

const InfoSec = () => {
    return (
        <section className="w-full bg-gray-50 py-16 md:py-24" id="about">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    {/* Left Side - Heading */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto lg:mx-0">
                            <span className="text-[#E01923]">Appicoders</span>
                            – #<span className="text-[#E01923]">1</span> Mobile App & Web Development Company in USA
                        </h1>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-6 flex flex-col items-center lg:items-start">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left max-w-2xl">
                            Welcome to Appicoders, your trusted partner for expert mobile app and web development.
                            With over 10+ years of experience, we specialize in designing, developing, and marketing
                            cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
                        </p>
                        <ButtonLatest
                            title="READ MORE"
                            classes="inline-block py-4 px-8 text-white rounded-lg bg-gradient-to-r from-[#FF0000] to-black hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSec