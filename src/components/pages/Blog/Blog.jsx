import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaComment,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
const Blog = () => {
  // Sample blog data (replace with your actual content)
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Perfect Wedding Photography",
      excerpt:
        "Learn my professional techniques for capturing stunning wedding moments that couples will cherish forever.",
      category: "Wedding",
      date: "June 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      likes: 42,
      comments: 12,
    },
    {
      id: 2,
      title: "Mastering Natural Light Portraits",
      excerpt:
        "How to find and use beautiful natural light for professional-looking portrait photography.",
      category: "Portrait",
      date: "May 28, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
      likes: 35,
      comments: 8,
    },
    {
      id: 3,
      title: "Essential Gear for Travel Photography",
      excerpt:
        "My carefully curated list of must-have equipment for capturing amazing travel photos.",
      category: "Gear",
      date: "April 10, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422",
      likes: 56,
      comments: 15,
    },
    {
      id: 4,
      title: "Editing Workflow in Lightroom",
      excerpt:
        "Step-by-step guide to my professional photo editing process for stunning results.",
      category: "Editing",
      date: "March 22, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
      likes: 78,
      comments: 23,
    },
    {
      id: 5,
      title: "Posing Guide for Couples",
      excerpt:
        "50+ natural posing ideas to help couples look their best in engagement and wedding photos.",
      category: "Posing",
      date: "February 15, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      likes: 63,
      comments: 18,
    },
    {
      id: 6,
      title: "Building Your Photography Brand",
      excerpt:
        "Marketing strategies to help photographers stand out and attract their ideal clients.",
      category: "Business",
      date: "January 5, 2023",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07",
      likes: 47,
      comments: 11,
    },
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "wedding", name: "Wedding" },
    { id: "portrait", name: "Portrait" },
    { id: "gear", name: "Gear" },
    { id: "editing", name: "Editing" },
    { id: "business", name: "Business" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      post.category.toLowerCase() === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07"
              alt="Blog Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Photography Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tips, tutorials, and behind-the-scenes stories from my photography
              journey
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Blog Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
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

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <span className="flex items-center mr-4">
                          <FaCalendarAlt className="mr-2" />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 hover:text-amber-500 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-gray-500 text-sm">
                          <span className="flex items-center">
                            <FaHeart className="mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <FaComment className="mr-1" />
                            {post.comments}
                          </span>
                        </div>
                        <span className="text-amber-500 hover:text-amber-600 flex items-center transition-colors">
                          Read More <FaArrowRight className="ml-2" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No articles found
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

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-amber-500 hover:text-white transition-colors">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
                    <FaArrowRight />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-amber-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Photography Tips Direct to Your Inbox
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter for exclusive content, editing
              tutorials, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Popular Topics
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Wedding Photography",
                "Lightroom Presets",
                "Posing Guide",
                "Camera Gear",
                "Business Tips",
                "Natural Light",
                "Editing Tutorials",
                "Drone Photography",
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="bg-gray-100 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
