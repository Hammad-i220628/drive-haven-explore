import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      title: "Experience Luxury",
      subtitle: "Discover our premium collection",
    },
    {
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
      title: "Drive Excellence",
      subtitle: "Precision engineered for performance",
    },
    {
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
      title: "Future of Driving",
      subtitle: "Innovation meets sophistication",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="bg-car-accent text-car-primary px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 flex items-center mx-auto group">
                  Explore Vehicles
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-car-accent"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;