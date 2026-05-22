import LogoReact from "../../assets/logos/react.svg";
import LogoJavascript from "../../assets/logos/javascript.svg";
import LogoHtml from "../../assets/logos/html5.svg";
import LogoCss from "../../assets/logos/css3.svg";
import LogoFigma from "../../assets/logos/figma.svg";
import LogoGit from "../../assets/logos/git.svg";
import LogoGithub from "../../assets/logos/github.svg";
import LogoSass from "../../assets/logos/sass.svg";
import "./StackTechnique.css";

function StackTechnique() {
  return (
    <section className="stack-technique">
      <h2>Compétences Techniques</h2>
      <div className="stack-list">
        <span>
          <img src={LogoFigma} alt="logo-figma" />
        </span>
        <span>
          <img src={LogoGit} alt="logo-git" />
        </span>
        <span>
          <img src={LogoGithub} alt="logo-github" />
        </span>
        <span>
          <img src={LogoSass} alt="logo-sass" />
        </span>
        <span>
          <img src={LogoReact} alt="logo-react" />
        </span>
        <span>
          <img src={LogoJavascript} alt="logo-javascript" />
        </span>
        <span>
          <img src={LogoHtml} alt="logo-Html" />
        </span>
        <span>
          <img src={LogoCss} alt="logo-Css" />
        </span>
      </div>
    </section>
  );
}

export default StackTechnique;
