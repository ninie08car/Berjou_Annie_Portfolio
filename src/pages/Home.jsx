import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Accueil</h1>
      <p>Je crée des interfaces web qui ont du caractère.</p>
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
  );
}

export default Home;
