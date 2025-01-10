import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const FeaturedVehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
      price: "89,900",
      rating: 5,
      specs: {
        year: "2024",
        mileage: "0",
        transmission: "Automatic",
      },
    },
    {
      id: 2,
      name: "BMW 7 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
      price: "86,800",
      rating: 5,
      specs: {
        year: "2024",
        mileage: "0",
        transmission: "Automatic",
      },
    },
    {
      id: 3,
      name: "Audi A8",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
      price: "87,500",
      rating: 5,
      specs: {
        year: "2024",
        mileage: "0",
        transmission: "Automatic",
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-car-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-car-primary mb-4"
          >
            Featured Vehicles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-car-muted max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium vehicles, each offering an
            unparalleled driving experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-car-primary">
                  ${vehicle.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-car-primary">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(vehicle.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-car-accent fill-current"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(vehicle.specs).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs text-car-muted uppercase">{key}</p>
                      <p className="font-medium text-car-primary">{value}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-car-primary text-white py-2 rounded-md hover:bg-car-accent transition-colors flex items-center justify-center group">
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;