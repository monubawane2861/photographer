import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaCamera } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-gray-900 py-2"
          : scrolled
          ? "bg-black/90 backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <FaCamera className="text-2xl text-white group-hover:text-amber-400 transition" />
          <span className="text-white text-xl font-bold group-hover:text-amber-400 transition">
            Shutter<span className="text-amber-400">Frame</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white text-lg hover:text-amber-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <FaTimes className="text-white text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white text-lg hover:text-amber-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
