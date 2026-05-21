import { NavLink } from "react-router-dom";
import Description from "../components/Description/Description";
import StackTechnique from "../components/StackTechnique/StackTechnique";
import ContactCTA from "../components/ContactCTA/ContactCTA";

function Home() {
  return (
    <div className="home-page">
      <Description />
      <NavLink>Mes projets</NavLink>
      <StackTechnique />
      <ContactCTA />
    </div>
  );
}

export default Home;
