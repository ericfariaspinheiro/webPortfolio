import "./App.css";
import Header from "./partials/Header/Header.js";
import Presentation from "./pages/Home/Presentation";
import Projects from "./pages/Home/Projects";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    let prevScrollPosition = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPosition = window.pageYOffset;
      if (prevScrollPosition > currentScrollPosition) {
        return (document.getElementById("navBar").style.top = "0");
      }
      document.getElementById("navBar").style.top = "-50px";
      return (prevScrollPosition = currentScrollPosition);
    };
  }, []);

  const nameOnChange = (updateName) => {
    const newLetterName = updateName.target.value;
    return setName(newLetterName);
  };

  const emailOnChange = (updateEmail) => {
    const newLetterEmail = updateEmail.target.value;
    return setEmail(newLetterEmail);
  };

  const subjectOnChange = (updateSubject) => {
    const newLetterSubject = updateSubject.target.value;
    return setSubject(newLetterSubject);
  };

  const validateEmailContent = (e) => {
    e.preventDefault();
    let counter = 0;

    if (name === "") {
      document.getElementById("nameField").style.border = "solid red 1.5px";
    } else if (name !== "") {
      document.getElementById("nameField").style.border = "unset";
      counter++;
    }

    if (email === "") {
      document.getElementById("mailField").style.border = "solid red 1.5px";
    } else if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
      document.getElementById("mailField").style.border = "solid red 1.5px";
    } else {
      document.getElementById("mailField").style.border = "unset";
      counter++;
    }

    if (subject === "") {
      document.getElementById("subjectField").style.border = "solid red 1.5px";
    } else {
      document.getElementById("subjectField").style.border = "unset";
      counter++;
    }

    if (counter === 3) {
      sendEmail(e);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8hnyuzp", "myOwnTemplate", e.target, "02pwphEzoiAty5jhJ").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <Router>
      <div>
        <Header />
        <main id="content">
          <Presentation />
          <Projects />
          <About />
          <Contact
            nameOnChange={nameOnChange}
            emailOnChange={emailOnChange}
            subjectOnChange={subjectOnChange}
            validateEmailContent={validateEmailContent}
          />
        </main>
      </div>
    </Router>
  );
}

export default App;
