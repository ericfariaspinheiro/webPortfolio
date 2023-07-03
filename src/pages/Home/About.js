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
              {" "}
              I have always been interested in how technologies work, especially the web. Getting to know its ins and outs and working to push it even
              further is my goal. Previously I worked with API documentation and Testing Automation, but now I am aiming to make a career shift to
              software development.
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
