import "./Footer.css";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import mailIcon from "../../assets/icons/mail-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Berjou Annie. Tous droits réservés.</p>
      <div className="footer-icons">
        <a
          href="https://github.com/TON_PSEUDO"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/TON_PROFIL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:annie.carrau@wanadoo.fr">
          <img src={mailIcon} alt="Email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
