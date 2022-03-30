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
                    <p> I have always been interested in how technologies work, specially the web. 
                        Getting to know it better and working to push it even further is my goal.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consectetur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsa ducimus recusandae voluptatum veniam exercitationem.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptate molestias laudantium assumenda quisquam asperiores.
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