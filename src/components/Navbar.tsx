import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-car-primary font-bold text-xl hover:text-car-accent transition-colors"
            >
              AutoLuxe
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/inventory">Inventory</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-car-primary hover:text-car-accent focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/inventory">Inventory</MobileNavLink>
          <MobileNavLink to="/services">Services</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-car-primary hover:text-car-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-car-primary hover:text-car-accent block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;