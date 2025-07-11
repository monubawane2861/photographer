import { Link } from "react-router-dom";
import { FaCamera, FaArrowRight } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        {/* Camera Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-amber-100 p-6 rounded-full">
            <FaCamera className="text-amber-500 text-5xl" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to capturing beautiful moments!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <FaArrowRight className="rotate-180" />
            Back to Home
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-gray-300 hover:border-amber-500 text-gray-800 hover:text-amber-500 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            View Portfolio
            <FaArrowRight />
          </Link>
        </div>

        {/* Photography Tip */}
        <div className="mt-12 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-600">
            <span className="font-semibold text-amber-500">
              Photography Tip:
            </span>{" "}
            The best camera is the one you have with you. Don't miss a moment!
          </p>
        </div>
      </div>

      {/* Optional: Recent Work Preview */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[1, 2, 3, 4].map((item) => (
          <Link
            key={item}
            to="/portfolio"
            className="group aspect-square overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={`https://source.unsplash.com/random/300x300/?photography,${item}`}
              alt={`Photography sample ${item}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
