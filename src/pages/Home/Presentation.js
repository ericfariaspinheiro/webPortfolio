import linkedinLogo from "../../assets/Images/linkedin-logo.png";
import githubLogo from "../../assets/Images/github-logo.png";
import emailLogo from "../../assets/Images/email-logo.png";
import curriculumLogo from "../../assets/Images/resume-logo.png";
import curriculum from "../../assets/curriculo-eric.pdf";

import gitLogo from "../../assets/Images/git-logo.png";
import HTML5Logo from "../../assets/Images/html-5-logo.png";
import CSSLogo from "../../assets/Images/css-3-logo.png";
import javascriptLogo from "../../assets/Images/javascript-logo.png";
import reactLogo from "../../assets/Images/react-logo.png";

import hero from "../../assets/Images/hero.png";
import heroBackground from "../../assets/Images/heroBackground.png";

export default function Presentation() {
  return (
    <section id="welcome">
      <div className="welcomeRow">
        <Welcome />
        <Contact />
        <Hero />
      </div>
      <TechBanner />
    </section>
  );
}

function Welcome() {
  return (
    <div className="welcomeContent">
      <h2>Hello, my name is</h2>
      <h1> Eric Pinheiro. </h1>
      <h2> I'm a web developer! </h2>
    </div>
  );
}

function Contact() {
  return (
    <div id="contactMe">
      <div className="innerContactMe">
        <div className="contactIcon">
          <a href="https://www.linkedin.com/in/eric-pinheiro-2118a8227/" target="_blank" rel="noreferrer">
            <img className="allLogos" src={linkedinLogo} alt="linkedin logo" />
          </a>
        </div>
        <div className="contactIcon">
          <a href="https://github.com/ericfariaspinheiro" target="_blank" rel="noreferrer">
            <img className="allLogos" src={githubLogo} alt="github logo" />
          </a>
        </div>
        <div className="contactIcon">
          <a href="#contact" rel="noreferrer">
            <img className="allLogos emailLogo" src={emailLogo} alt="email logo" />
          </a>
        </div>
        <div className="contactIcon">
          <a href={curriculum} target="_blank" rel="noreferrer">
            <img className="allLogos resumeLogo" src={curriculumLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

function TechBanner() {
  return (
    <div id="welcomeBanner">
      <div className="banner"></div>
      <div className="bannerContent">
        <div className="techUsed">
          <img src={gitLogo} alt="git" className="techUsedPNG" />
        </div>
        <div className="techUsed">
          <img src={HTML5Logo} alt="html" className="techUsedPNG" />
        </div>
        <div className="techUsed">
          <img src={CSSLogo} alt="css" className="techUsedPNG" />
        </div>
        <div className="techUsed">
          <img src={javascriptLogo} alt="javascript" className="techUsedPNG" />
        </div>
        <div className="techUsed">
          <img src={reactLogo} alt="react" className="techUsedPNG" />
        </div>
      </div>
      <div className="banner"></div>
    </div>
  );
}

function Hero() {
  return (
    <div className="heroBox">
      <img className="heroChar" src={hero} alt="" />
      <img className="heroCharBack" src={heroBackground} alt="" />
    </div>
  );
}
