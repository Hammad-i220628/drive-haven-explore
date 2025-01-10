import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Wrench, Car, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description:
        "Complete vehicle maintenance and repair services by certified technicians using genuine parts.",
    },
    {
      icon: Car,
      title: "Vehicle Inspection",
      description:
        "Comprehensive multi-point inspection to ensure your vehicle is in optimal condition.",
    },
    {
      icon: Clock,
      title: "Express Service",
      description:
        "Quick service options for routine maintenance with minimal wait times.",
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description:
        "Flexible warranty options to protect your investment and provide peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of automotive services to keep your
            vehicle running at its best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-car-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 gradient-text">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">Book a Service Today</h2>
          <p className="mb-6 text-gray-300">
            Schedule your service appointment with our expert technicians.
          </p>
          <button className="bg-car-accent text-car-primary px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;