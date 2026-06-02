import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function PortfolioRouter() {
  return (
    <Router basename="/bejou-annie-portfolio">
      <Header />
      <Routes>
        {/* Route Accueil */}
        <Route path="/" element={<Home />} />
        {/* Route Projects */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />
        {/* Route Contact */}
        <Route path="/contact" element={<Contact />} />
        {/* Route 404 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default PortfolioRouter;
