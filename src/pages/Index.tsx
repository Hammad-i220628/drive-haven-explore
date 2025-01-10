import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedVehicles from "../components/FeaturedVehicles";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedVehicles />
    </main>
  );
};

export default Index;