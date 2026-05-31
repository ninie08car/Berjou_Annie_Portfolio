import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import { useParams } from "react-router-dom";

function Projects() {
  const { slug } = useParams();

  return (
    <div className="projects-page">
      <ProjectDetails slug={slug} />
    </div>
  );
}

export default Projects;
