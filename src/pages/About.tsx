import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Award, Users, ThumbsUp, Building, Car } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Building,
      value: "25+",
      label: "Years of Excellence",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: Car,
      value: "500+",
      label: "Cars in Stock",
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing exceptional service and premium vehicles
            to our valued customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1998, AutoLuxe has grown from a small local dealership to
              one of the most trusted names in luxury vehicles. Our commitment to
              excellence and customer satisfaction has earned us numerous industry
              awards and the loyalty of thousands of satisfied customers.
            </p>
            <p className="text-gray-600">
              We pride ourselves on offering a premium selection of vehicles,
              exceptional service, and a car-buying experience that exceeds
              expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
              alt="Dealership"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;