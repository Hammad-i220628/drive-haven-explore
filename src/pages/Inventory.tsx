import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";

const Inventory = () => {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
  });

  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      price: "89,900",
      year: "2024",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
      specs: {
        mileage: "0",
        transmission: "Automatic",
        fuelType: "Hybrid",
      },
    },
    {
      id: 2,
      name: "BMW 7 Series",
      price: "86,800",
      year: "2024",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      specs: {
        mileage: "0",
        transmission: "Automatic",
        fuelType: "Electric",
      },
    },
    {
      id: 3,
      name: "Audi A8",
      price: "87,500",
      year: "2024",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a",
      specs: {
        mileage: "0",
        transmission: "Automatic",
        fuelType: "Hybrid",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <h1 className="text-3xl font-bold text-gray-900">Our Inventory</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  ${vehicle.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(vehicle.specs).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs text-gray-500 uppercase">{key}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;