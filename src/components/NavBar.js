import mainlogo from '../assets/main-logo.png'
import menu from '../assets/menu.png' 

export default function NavBar () {
    

    function handleBurguerClick () {
        const burguerVisibility = document.getElementById("navBar");
        const menuVisibility = document.getElementsByClassName("navBarUL")[0];

        if(burguerVisibility.className != "open") {
            burguerVisibility.classList.add("open");
            menuVisibility.classList.add("open");
        } else {
            burguerVisibility.classList.remove("open");
            menuVisibility.classList.remove("open");
        }        

    }

    return(
        <header id="navBar">
            <div id="navBarArea">
                <div className="navBarLogo">
                    <img src={mainlogo} alt="main logo" />
                </div>
                <ul className="navBarUL">
                    <li className="navBarItems" ><a href="#welcome">Home</a></li>
                    <li className="navBarItems" ><a href="#projects">My Work</a></li>
                    <li className="navBarItems" ><a href="#about">About</a></li>
                    <li className="navBarItems" ><a href="#contact">Contact</a></li>
                </ul>
                <a className="burgerNav" onClick={handleBurguerClick} >
                    <img src={menu} alt="Burguer Menu" />
                </a>
            </div>
        </header>
    )
}