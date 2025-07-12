import {
  FaCamera,
  FaCalendarAlt,
  FaImages,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import servicesData from "./Services.json";

const iconMap = {
  FaCamera: <FaCamera className="text-3xl text-amber-400" />,
  FaImages: <FaImages className="text-3xl text-amber-400" />,
  FaMoneyBillWave: <FaMoneyBillWave className="text-3xl text-amber-400" />,
  FaCalendarAlt: <FaCalendarAlt className="text-3xl text-amber-400" />,
  FaStar: <FaStar className="text-2xl text-amber-500" />,
};

const Services = () => {
  const {
    hero,
    photographyPackages,
    whyChooseMe,
    comparisonTitle,
    comparisonTable,
    cta,
  } = servicesData;

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-black/50">
          <div className="absolute inset-0 -z-10">
            <img
              src={hero.backgroundImage}
              alt="Services Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {hero.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Photography Packages</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {photographyPackages.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
                >
                  <div className="p-6 text-center bg-gray-50 group-hover:bg-amber-50 transition-colors">
                    <div className="flex justify-center mb-4">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-center items-baseline gap-1 mb-4">
                      <span className="text-gray-500 text-sm">Starting at</span>
                      <span className="text-2xl font-bold text-amber-500">
                        ${service.startingPrice}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-amber-400 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="block w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-4 rounded text-center transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose My Services
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseMe.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{comparisonTitle}</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    {comparisonTable.headers.map((head, idx) => (
                      <th key={idx} className="p-4 text-center">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className="p-4 border-b border-gray-200 text-center"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 px-4 bg-amber-400 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl mb-8">{cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={cta.primaryLink}
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                {cta.primaryText}
              </Link>
              <Link
                to={cta.secondaryLink}
                className="border-2 border-black hover:bg-black hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                {cta.secondaryText}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
