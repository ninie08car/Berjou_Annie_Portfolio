import Description from "../components/Description/Description";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import StackTechnique from "../components/StackTechnique/StackTechnique";
import ContactCTA from "../components/ContactCTA/ContactCTA";

function Home() {
  return (
    <div className="home-page">
      <Description />
      <ProjectDetails />
      <StackTechnique />
      <ContactCTA />
    </div>
  );
}

export default Home;
