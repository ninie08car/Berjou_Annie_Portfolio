import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjetDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function PortfolioRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route Accueil */}
        <Route path="/" element={<Home />} />
        {/* Route Projects */}
        <Route path="/projects" element={<Projects />} />
        {/* Route ProjetDetails */}
        <Route path="/projectdetails" element={<ProjectDetails />} />
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
