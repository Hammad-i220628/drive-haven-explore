import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedVehicles from "../components/FeaturedVehicles";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <div className="page-container">
        <FeaturedVehicles />
      </div>
    </main>
  );
};

export default Index;