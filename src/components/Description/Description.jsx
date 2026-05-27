import { NavLink } from "react-router-dom";
import "./Description.css";

function Description() {
  return (
    <section className="home-description">
      <div className="description">
        <h2>
          Je crée des
          <span>
            {" "}
            interfaces <br /> web{" "}
          </span>
          qui ont du <br />
          caractère.
        </h2>
        <p>
          Développeuse web fraîchement diplômée, passionnée par le front-end, le
          design soignée et le code propre. Voici un aperçu de mes projets de
          formation.
        </p>
        <div className="description-buttons">
          <NavLink to="/projects" className="btn-primary">
            Voir mes projets
          </NavLink>

          <NavLink to="/contact" className="btn-secondary">
            Me contacter
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Description;
