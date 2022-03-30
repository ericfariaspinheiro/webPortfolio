import mainlogo from '../assets/main-logo.png' 

export default function NavBar () {
 
    return(
        <header id="navBar">
            <div id="navBarArea">
                <div className="navBarLogo">
                    <img src={mainlogo} alt="main logo" />
                </div>
                <div className="navBarList">
                    <ul className="navBarUL">
                        <li className="navBarItems"><a href="#welcome">Home</a></li>
                        <li className="navBarItems"><a href="#projects">My Work</a></li>
                        <li className="navBarItems"><a href="#about">About</a></li>
                        <li className="navBarItems"><a href="#welcome">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}