import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCamera } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <FaCamera className="text-2xl text-white group-hover:text-amber-400 transition-colors" />
          <span className="text-white font-bold text-xl group-hover:text-amber-400 transition-colors">
            Shutter<span className="text-amber-400">Frame</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Portfolio", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white text-xl hover:text-amber-400 transition-colors"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu (Slides in from right) */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black/90 z-50 flex justify-end">
            <div className="w-3/4 h-full bg-gray-900/95 backdrop-blur-sm p-6">
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes className="text-white text-2xl" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {["Home", "Portfolio", "Services", "About", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="text-white text-xl hover:text-amber-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
