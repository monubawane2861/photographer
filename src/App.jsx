import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Services from "./components/pages/Services/Services";
import Testimonials from "./components/pages/Testimonials/Testimonials";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";

// import NotFound from "./pages/NotFound";
// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      {/* Navigation bar (common across all pages) */}
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
