import { useState } from "react";
import {
  FaSearch,
  FaArrowRight,
  FaInstagram,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import portfolioData from "../Portfolio/Portfolio.json";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPortfolio = portfolioData.portfolio.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-black/50">
          <div className="absolute inset-0 -z-10">
            <img
              src={portfolioData.heroSection.backgroundImage}
              alt="Portfolio Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {portfolioData.heroSection.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {portfolioData.heroSection.subtitle}
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex flex-wrap gap-2">
                {portfolioData.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search photos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Portfolio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{item.location}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white">
                        <FaHeart className="text-amber-400" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-white hover:text-amber-400 transition-colors">
                          <FaShare />
                        </button>
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors">
                          View <FaArrowRight className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredPortfolio.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No photos found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Load More */}
            {filteredPortfolio.length > 0 && (
              <div className="text-center mt-12">
                <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Instagram */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Follow on Instagram</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See more of my daily work and behind-the-scenes on Instagram
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {portfolioData.instagram.images.map((img, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative overflow-hidden aspect-square"
                >
                  <img
                    src={img}
                    alt={`Instagram ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaInstagram className="text-white text-2xl" />
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-medium transition-colors"
              >
                {portfolioData.instagram.handle} <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-amber-400 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {portfolioData.cta.heading}
            </h2>
            <p className="text-xl mb-8">{portfolioData.cta.text}</p>
            <a
              href={portfolioData.cta.buttonLink}
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {portfolioData.cta.buttonText}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
