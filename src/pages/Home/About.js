import profilePicture from "../../assets/Images/profile-pic.png";

export default function About() {
  return (
    <div id="about">
      <div className="innerAbout">
        <h2>ABOUT</h2>
        <div className="mobileReverse">
          <section className="aboutText">
            <h3>
              I am a front-end developer <br /> based in Rio de Janeiro, Brazil
            </h3>
            <br />
            <p>
              Experienced professional in technical documentation and software testing, with a strong background in APIs and best practices. Recently
              made a transition to front-end development, accumulating 1 year of experience as a front-end developer. Specialized in React,
              JavaScript, TypeScript, SASS, and VTEX.
            </p>
            <div className="contactButton">
              <a href="#contact">Contact me!</a>
            </div>
          </section>
          <section className="aboutPic">
            <div className="profilePic">
              <img src={profilePicture} alt="profile pic" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
