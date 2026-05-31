import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectsCarousel.css";
import projects from "../../data/projects.json";

import BookiImage from "../../assets/images/Projet_Booki.png";
import OhmyfoodImage from "../../assets/images/Projet_Ohmyfood.png";
import KasaImage from "../../assets/images/Projet_Kasa.png";

const projectImages = {
  booki: BookiImage,
  ohmyfood: OhmyfoodImage,
  kasa: KasaImage,
};

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <span className="carousel-subtitle">PORTFOLIO</span>
        <h2>
          Mes <span>Projets</span>
        </h2>
        <p>Une sélection de projets réalisés durant ma formation</p>
      </div>
      <div className="carousel-wrapper">
        {/* Flèche gauche */}
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-card">
          {/* Dots AU-DESSUS de l’image */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <h3>{project.title}</h3>
          <Link to={`/projects/${project.image}`}>
            <img
              src={projectImages[project.image]}
              alt={project.title}
              className="project-img"
            />
          </Link>
        </div>

        {/* Flèche droite */}
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
