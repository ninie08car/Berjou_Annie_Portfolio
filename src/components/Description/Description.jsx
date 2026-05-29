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
          Bonjour, je suis Annie Berjou, développeuse web junior passionnée par
          le design d’interfaces modernes et le développement avec React. <br />{" "}
          Après plus de 20 ans comme responsable fichier dans le commerce
          alimentaire, j’ai choisi de me reconvertir dans le développement web,
          un domaine qui m’intéressait déjà lors de mes études en BTS
          Informatique de gestion. Aujourd’hui, je développe mes compétences à
          travers une formation et des projets concrets. <br />
          Je maîtrise principalement HTML, CSS et React, et je continue à
          approfondir JavaScript. J’aime particulièrement créer des interfaces
          responsive, soignées et agréables à utiliser. <br />
          Parmi mes projets, Booki représente une étape importante car il s’agit
          de mon premier projet réalisé après plusieurs années sans pratiquer le
          développement. Ohmyfood m’a également permis de relever un vrai défi
          autour des animations CSS, tandis que Kasa m’a aidée à approfondir
          React. <br />
          Persévérante et motivée, j’apprécie autant le travail en autonomie
          qu’en équipe. Je recherche aujourd’hui une première opportunité pour
          acquérir de l’expérience et continuer à progresser, notamment dans les
          animations web et le back-end.
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
