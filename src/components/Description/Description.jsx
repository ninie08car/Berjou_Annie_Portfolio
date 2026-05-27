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
        <NavLink
          to="/projects"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Voir mes projets
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Me contacter
        </NavLink>
      </div>
    </section>
  );
}

export default Description;
