import { 
  Smartphone, 
  Globe, 
  Cpu, 
  Blocks, 
  ScanLine, 
  Rocket 
} from "lucide-react";
// import servicesImg from "/public/dummy-laptop.png"; // replace with your dummy image

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Custom Mobile Applications",
      desc: "iOS, Android and cross-platform apps",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Custom Web Development",
      desc: "Robust Web, Progressive Web Apps",
    },
    {
      icon: <ScanLine className="w-6 h-6 text-white" />,
      title: "Augmented Reality",
      desc: "Futuristic AR Apps",
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "Artificial Intelligence",
      desc: "Innovative AI & ML Solutions",
    },
    {
      icon: <Blocks className="w-6 h-6 text-white" />,
      title: "Blockchain Development",
      desc: "Custom Blockchain Solutions",
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "MVP Development",
      desc: "For Startups & Enterprises",
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[url('/shape3.png')] text-white  px-6 lg:px-20 overflow-hidden pt-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-100 mb-8">
            Get to know about what we're good at.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-red-500 rounded-full p-3 shadow-md">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="w-[90%] lg:w-[500px]">
            <img
              src="/laptop.png"
              alt="Services Illustration"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
