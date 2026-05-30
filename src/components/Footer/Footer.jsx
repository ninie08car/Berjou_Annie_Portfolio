import "./Footer.css";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import mailIcon from "../../assets/icons/mail-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Berjou Annie. Tous droits réservés.</p>
      <div className="footer-icons">
        <img src={githubIcon} alt="icone-github" />
        <img src={linkedinIcon} alt="icone-linkedin" />
        <img src={mailIcon} alt="icone-mail" />
      </div>
    </footer>
  );
}

export default Footer;
