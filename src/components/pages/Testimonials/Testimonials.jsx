import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      type: "Wedding Clients",
      rating: 5,
      content:
        "We couldn't be happier with our wedding photos! You captured every special moment so beautifully. The album you created is something we'll treasure forever.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      id: 2,
      name: "The Johnson Family",
      type: "Family Portrait",
      rating: 5,
      content:
        "Our family photos turned out absolutely stunning. You made all of us feel so comfortable, even our toddler who usually hates photos! The natural, joyful moments you captured are priceless.",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
    },
    {
      id: 3,
      name: "Emma Wilson",
      type: "Maternity Session",
      rating: 5,
      content:
        "I was nervous about my maternity shoot but you made me feel so beautiful and confident. The photos are breathtaking - they perfectly capture this special time in our lives.",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    },
    {
      id: 4,
      name: "TechStart Inc.",
      type: "Corporate Client",
      rating: 5,
      content:
        "The professional headshots you took for our team were outstanding. You managed to capture everyone's personality while maintaining a consistent corporate look. Will definitely hire you again!",
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07",
    },
    {
      id: 5,
      name: "James & Robert",
      type: "Engagement Session",
      rating: 5,
      content:
        "Our engagement photos exceeded all expectations! You found the most beautiful locations and made us feel completely at ease. The way you captured our connection is magical.",
      image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422",
    },
  ];

  // Featured testimonials (for the grid section)
  const featuredTestimonials = [
    {
      id: 6,
      name: "Lisa Thompson",
      type: "Newborn Session",
      rating: 5,
      highlight: "Absolutely magical newborn photos!",
      content:
        "You were so patient and gentle with our baby. The photos are more beautiful than we could have imagined.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      id: 7,
      name: "David Chen",
      type: "Product Photography",
      rating: 5,
      highlight: "Boosted our online sales by 30%!",
      content:
        "Your product photos made our items look irresistible. We saw a significant increase in conversions after updating our website with your images.",
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07",
    },
    {
      id: 8,
      name: "The Anderson Family",
      type: "Generational Portrait",
      rating: 5,
      highlight: "Priceless family heirlooms",
      content:
        "Having photos with grandparents, parents and grandchildren together is truly special. You captured our family's love and connection perfectly.",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
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
              alt="Testimonials Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear what my clients say about their photography experience
            </p>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Kind Words From Clients
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
                    <FaQuoteLeft className="text-amber-400 text-4xl mx-auto mb-6" />
                    <p className="text-lg text-gray-700 mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-amber-400 mx-0.5" />
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Featured Testimonials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Featured Experiences</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-1">
                          {testimonial.highlight}
                        </h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-amber-400 mx-0.5" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black aspect-video rounded-lg overflow-hidden">
                {/* Replace with actual video embed */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                      </svg>
                    </div>
                    <p>Wedding Client Testimonial</p>
                  </div>
                </div>
              </div>
              <div className="bg-black aspect-video rounded-lg overflow-hidden">
                {/* Replace with actual video embed */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                      </svg>
                    </div>
                    <p>Family Portrait Testimonial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-amber-400 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your Own Experience?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how I can capture your special moments
            </p>
            <a
              href="/contact"
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book Your Session
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
