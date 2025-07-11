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

const Services = () => {
  const photographyServices = [
    {
      id: 1,
      title: "Wedding Photography",
      description:
        "Capture every precious moment of your special day with our professional wedding photography services.",
      startingPrice: 1200,
      features: [
        "Full-day coverage",
        "2 photographers",
        "500+ edited photos",
        "Online gallery",
        "Engagement session included",
      ],
      icon: <FaCamera className="text-3xl text-amber-400" />,
    },
    {
      id: 2,
      title: "Portrait Sessions",
      description:
        "Beautifully crafted portraits for individuals, couples, and families that tell your unique story.",
      startingPrice: 300,
      features: [
        "1-2 hour session",
        "3 outfit changes",
        "50+ edited photos",
        "Professional lighting",
        "Indoor/outdoor options",
      ],
      icon: <FaImages className="text-3xl text-amber-400" />,
    },
    {
      id: 3,
      title: "Commercial Photography",
      description:
        "High-quality product and business photography to elevate your brand's visual identity.",
      startingPrice: 500,
      features: [
        "Professional lighting setup",
        "Product styling",
        "White background options",
        "Fast turnaround",
        "E-commerce ready",
      ],
      icon: <FaMoneyBillWave className="text-3xl text-amber-400" />,
    },
    {
      id: 4,
      title: "Event Coverage",
      description:
        "Comprehensive documentation of your corporate or social events with professional photography.",
      startingPrice: 800,
      features: [
        "4-8 hour coverage",
        "Candid moments",
        "Group photos",
        "200+ edited photos",
        "Next-day previews",
      ],
      icon: <FaCalendarAlt className="text-3xl text-amber-400" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-black/50">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07"
              alt="Services Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              My Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional photography packages tailored to your needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Photography Packages</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {photographyServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
                >
                  <div className="p-6 text-center bg-gray-50 group-hover:bg-amber-50 transition-colors">
                    <div className="flex justify-center mb-4">
                      {service.icon}
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
                            className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
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

        {/* Why Choose Me Section */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose My Services
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-2xl text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  Professional-grade equipment and editing to deliver stunning
                  images that last a lifetime.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-2xl text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Weekend and evening appointments available to accommodate your
                  busy schedule.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaImages className="text-2xl text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Receive edited, high-resolution photos within 7-10 days after
                  your session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Package Comparison</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Features</th>
                    <th className="p-4 text-center">Portrait</th>
                    <th className="p-4 text-center">Wedding</th>
                    <th className="p-4 text-center">Commercial</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Session Duration", "1-2 hours", "Full day", "2-4 hours"],
                    ["Number of Photos", "50+", "500+", "100+"],
                    ["Edited Images", "✓", "✓", "✓"],
                    ["Online Gallery", "✓", "✓", "✓"],
                    ["Print Release", "✓", "✓", "✓"],
                    ["Multiple Locations", "-", "✓", "✓"],
                    ["Second Photographer", "-", "✓", "-"],
                  ].map(([feature, ...packages], index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 border-b border-gray-200">
                        {feature}
                      </td>
                      {packages.map((pkg, i) => (
                        <td
                          key={i}
                          className="p-4 border-b border-gray-200 text-center"
                        >
                          {pkg}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-amber-400 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Book Your Session?
            </h2>
            <p className="text-xl mb-8">
              Have questions or need a custom package? Get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Contact Me
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-black hover:bg-black hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                View Portfolio
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
