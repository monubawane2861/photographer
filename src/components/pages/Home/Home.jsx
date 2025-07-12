import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import data from "../Home/Home.json";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Home = () => {
  const { heroSection, featuredWork, aboutMe, testimonials, ctaSection } = data;

  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-black/50">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroSection.backgroundImage}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center px-4 sm:px-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn leading-tight">
              Capturing{" "}
              <span className="text-amber-400">
                {heroSection.highlightWord}
              </span>{" "}
              Beautiful Moments
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {heroSection.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {heroSection.buttons.map((btn, index) => (
                <Link
                  key={index}
                  to={btn.link}
                  className={`${
                    index === 0
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "border border-white hover:border-amber-400 text-white hover:text-amber-400"
                  } font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition`}
                >
                  {btn.text} {index === 0 && <FaArrowRight />}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {featuredWork.title}
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredWork.galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={image.src}
                    alt={image.category}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to={featuredWork.viewMoreLink}
                className="inline-flex items-center gap-2 text-black hover:text-amber-500 font-semibold transition"
              >
                View Full Portfolio <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 relative">
              <div className="w-full h-72 sm:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={aboutMe.image}
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-400 p-4 rounded-lg shadow-xl hidden md:block">
                <h4 className="text-black font-bold text-xl">
                  {aboutMe.experience.years}
                </h4>
                <p className="text-black">{aboutMe.experience.label}</p>
              </div>
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                {aboutMe.title}
              </h2>
              <p className="text-gray-600 mb-4">{aboutMe.description1}</p>
              <p className="text-gray-600 mb-6">{aboutMe.description2}</p>
              <Link
                to={aboutMe.readMoreLink}
                className="inline-flex items-center gap-2 text-black hover:text-amber-500 font-semibold transition"
              >
                Read More About Me <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {testimonials.title}
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.feedbacks.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
                >
                  <p className="italic mb-4">"{item.quote}"</p>
                  <h4 className="font-bold text-amber-400">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-400 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              {ctaSection.title}
            </h2>
            <p className="text-lg sm:text-xl mb-8">{ctaSection.description}</p>
            <Link
              to={ctaSection.buttonLink}
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              {ctaSection.buttonText}
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
