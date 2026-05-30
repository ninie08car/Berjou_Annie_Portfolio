import { NavLink } from "react-router-dom";
import "./Header.css";
import profilImage from "../../assets/images/profil.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src={profilImage} alt="Annie Berjou" className="logo-photo" />
          <span>Portfolio Berjou Annie</span>
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projets
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
