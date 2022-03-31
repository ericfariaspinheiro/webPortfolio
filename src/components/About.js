import profilePicture from '../assets/profile-pic.png'

export default function About () {
    return (
        <div id="about">
            <div className="innerAbout">
                <section className="aboutText">
                    <h2>About</h2>
                    <br />
                    <h3>I am a front-end developer <br /> based in Rio de Janeiro, Brazil</h3>
                    <br />
                    <p className="textIndent"> I have always been interested in how technologies work, specially the web. 
                        Getting to know its ins and outs and working to push it even further is my goal.
                        Previously I worked with API documentation and Testing Automation, but now I am aiming to make a career shift to software development.
                    </p>
                    
                </section>
                <section className="aboutPic">
                    <div className="profilePic">
                        <img src={profilePicture} alt="profile pic"  />
                    </div>
                </section>
                <section className="contactButton">
                    <button >Contact me!</button>
                </section>
            </div>
        </div>  
    )
}