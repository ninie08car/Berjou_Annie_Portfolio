import "./ContactCTA.css";
import { NavLink } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Un projet en tête ? Discussions-en.</h2>

        <p>
          Je suis ouverte aux opportunités, stages et collaborations freelance.
        </p>
        <NavLink to="/contact" className="cta-button">
          Démarrer une conversation<span>→</span>
        </NavLink>
      </div>
    </section>
  );
}
