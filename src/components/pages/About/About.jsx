import { FaCamera, FaAward, FaSmile, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../About/About.json"; // JSON file path
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
const About = () => {
  const { heroSection, myStory, stats, approach, cta } = data;

  const iconMap = {
    calendar: (
      <FaCalendarAlt className="text-amber-500 text-4xl mx-auto mb-4" />
    ),
    camera: <FaCamera className="text-amber-500 text-4xl mx-auto mb-4" />,
    award: <FaAward className="text-amber-500 text-4xl mx-auto mb-4" />,
    smile: <FaSmile className="text-amber-500 text-4xl mx-auto mb-4" />,
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-black/50">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroSection.backgroundImage}
              alt="About Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {heroSection.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {heroSection.subtitle}
            </p>
          </div>
        </section>

        {/* My Story */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{myStory.heading}</h2>
              {myStory.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-600 mb-4">
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-4 mb-8">
                {myStory.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={myStory.ctaLink}
                className="inline-flex items-center gap-2 text-black hover:text-amber-500 font-semibold transition-colors"
              >
                {myStory.ctaText} <FaCamera />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {myStory.images.map((img, i) => (
                <div
                  key={i}
                  className="relative h-64 rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
            {stats.map((item, i) => (
              <div key={i} className="p-6">
                {iconMap[item.icon]}
                <h3 className="text-4xl font-bold mb-2">{item.count}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Creative Approach */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{approach.heading}</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.points.map((point, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-amber-500">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-amber-400 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{cta.heading}</h2>
            <p className="text-xl mb-8">{cta.text}</p>
            <Link
              to={cta.buttonLink}
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {cta.buttonText}
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
