import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import projects from "../../data/projects.json";

import BookiImage from "../../assets/images/Projet_Booki.png";
import OhmyfoodImage from "../../assets/images/Projet_Ohmyfood.png";
import KasaImage from "../../assets/images/Projet_Kasa.png";

const projectImages = {
  booki: BookiImage,
  ohmyfood: OhmyfoodImage,
  kasa: KasaImage,
};

function ProjectDetails() {
  const { slug } = useParams();

  const defaultIndex = slug ? projects.findIndex((p) => p.image === slug) : 0;

  const [selectedProject, setSelectedProject] = useState(
    defaultIndex !== -1 ? defaultIndex : 0,
  );

  const project = projects[selectedProject];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <span className="projects-subtitle">PORTFOLIO</span>
        <h2>
          Mes <span>Projets</span>
        </h2>
        <p>Une sélection de projets réalisés durant ma formation</p>
      </div>

      {/* 🔘 BOUTONS PROJETS */}
      <div className="projects-buttons">
        {projects.map((p, index) => (
          <button
            key={index}
            className={
              index === selectedProject ? "project-btn active" : "project-btn"
            }
            onClick={() => setSelectedProject(index)}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* 📦 PROJET AFFICHÉ */}
      <div className="projects-grid">
        <article className="project-card large">
          <div className="project-image">
            <img src={projectImages[project.image]} alt={project.title} />

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                WebSite
              </a>
            )}
          </div>

          <div className="project-content">
            <span className="project-meta">PROJET • {project.year}</span>

            <div className="project-top">
              <h3>{project.title}</h3>
            </div>

            <p>{project.contexte}</p>
            <p>{project.objectifs}</p>
            <p>{project.competences}</p>
            <p>{project.results}</p>
            <p>{project.amelioration}</p>

            <div className="project-tags">
              {project.tech.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectDetails;
