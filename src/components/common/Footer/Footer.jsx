import {
  FaCamera,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FaCamera className="text-2xl text-amber-400" />
              <span className="text-2xl font-bold">
                Shutter<span className="text-amber-400">Frame</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Capturing life's most precious moments with artistry and passion
              since 2012.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaPinterestP className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Portfolio",
                "Services",
                "About",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Photography Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-400">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Wedding Photography",
                "Portrait Sessions",
                "Maternity Photos",
                "Family Photography",
                "Commercial Shoots",
                "Event Coverage",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-400">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on special offers and photography tips.
            </p>
            <form className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800 text-white px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-l-lg"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 px-4 py-3 rounded-r-lg transition-colors"
                >
                  <MdEmail className="text-xl" />
                </button>
              </div>
            </form>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors">
                <MdLocationOn className="text-xl text-amber-400" />
                <span>123 Photo St, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors">
                <MdPhone className="text-xl text-amber-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ShutterFrame. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-amber-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-400 transition-colors text-sm"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
