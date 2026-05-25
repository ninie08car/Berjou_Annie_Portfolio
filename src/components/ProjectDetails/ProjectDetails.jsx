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
  return (
    <section className="projects-section">
      <div className="projects-header">
        <span className="projects-subtitle">PORTFOLIO</span>
        <h2>
          Mes <span>Projets</span>
        </h2>
        <p>Une sélection de projets réalisés durant ma formation</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`project-card ${index === 0 ? "large" : ""}`}
          >
            <div className="project-image">
              <img src={projectImages[project.image]} alt={project.title} />
            </div>
            <div className="project-content">
              <span className="project-meta">PROJET • {project.year}</span>
            </div>
            <div className="project-top">
              <h3>{project.title}</h3>
              <button className="arrow-btn">↗</button>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default ProjectDetails;
