import React, { useState, useEffect } from "react";
import mainlogo from "../../assets/Images/profile-pic.png";
import menu from "../../assets/Images/menu.png";

import styles from "./Header.module.css";

export default function NavBar() {
  const [burgerOpened, setBurgerOpened] = useState(false);

  useEffect(() => {
    console.log("Works");
  }, [burgerOpened]);

  // function handleBurguerClick(e) {
  //   const burguerVisibility = document.getElementById("navBar");
  //   const menuVisibility = document.getElementsByClassName("navBarUL")[0];

  //   // console.log(e.target.parent);

  //   if (burguerVisibility.className !== "open") {
  //     burguerVisibility.classList.add("open");
  //     menuVisibility.classList.add("open");
  //   } else {
  //     burguerVisibility.classList.remove("open");
  //     menuVisibility.classList.remove("open");
  //   }
  // }

  return (
    <header className={styles["navBar"]}>
      <div className={styles["navBarArea"]}>
        <div className={styles["navBarLogo"]}>
          <a href="/" className={styles["logo-link"]}>
            <img src={mainlogo} alt="Main logo" />
          </a>
          <p>Eric Pinheiro</p>
        </div>
        <ul className={styles["navBarUL"]}>
          <li className={styles["navBarItems"]}>
            <a href="#welcome">Home</a>
          </li>
          <li className={styles["navBarItems"]}>
            <a href="#projects">My Work</a>
          </li>
          <li className={styles["navBarItems"]}>
            <a href="#about">About</a>
          </li>
          <li className={styles["navBarItems"]}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a className={styles["burgerNav"]} onClick={() => setBurgerOpened(!burgerOpened)}>
          <img src={menu} alt="Burguer Menu" />
        </a>
      </div>
    </header>
  );
}
