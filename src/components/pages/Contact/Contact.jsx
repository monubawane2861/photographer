import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for your message! I will get back to you soon.");
  };

  // FAQ toggle state
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How soon should I book my session?",
      answer:
        "I recommend booking at least 2-3 months in advance for weddings and 2-4 weeks for portrait sessions to ensure availability.",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "Cancellations made more than 14 days before the session receive a full refund. Within 14 days, 50% of the deposit is refundable.",
    },
    {
      question: "How long until I receive my photos?",
      answer:
        "Portrait sessions are delivered within 2 weeks, weddings within 4-6 weeks. Rush processing is available for an additional fee.",
    },
    {
      question: "Do you travel for photoshoots?",
      answer:
        "Yes! I'm available for travel worldwide. Travel fees apply for locations more than 50 miles from my studio.",
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
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's create beautiful memories together. Reach out for bookings
              and inquiries.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="event">Event Coverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Tell me about your photography needs..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions or ready to book a session? Here's how you can
                reach me.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <FaPhone className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-amber-500 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <FaEnvelope className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@shutterframe.com"
                      className="text-gray-600 hover:text-amber-500 transition-colors"
                    >
                      hello@shutterframe.com
                    </a>
                    <p className="text-sm text-gray-500">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Studio Location
                    </h3>
                    <address className="text-gray-600 not-italic">
                      123 Photography Ave
                      <br />
                      New York, NY 10001
                    </address>
                    <p className="text-sm text-gray-500 mt-1">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-amber-500 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-amber-500 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-amber-500 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179035!2d-73.987844924239!3d40.74844097138939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689877293976!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <svg
                      className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
