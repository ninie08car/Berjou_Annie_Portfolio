import Description from "../components/Description/Description";
import ProjectsCarousel from "../components/ProjectsCarousel/ProjectsCarousel";
import StackTechnique from "../components/StackTechnique/StackTechnique";
import ContactCTA from "../components/ContactCTA/ContactCTA";

function Home() {
  return (
    <div className="home-page">
      <Description />
      <ProjectsCarousel />
      <StackTechnique />
      <ContactCTA />
    </div>
  );
}

export default Home;
