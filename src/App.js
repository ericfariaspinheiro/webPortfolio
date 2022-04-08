import './App.css'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { useState } from 'react'
import emailjs from 'emailjs-com';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameOnChange = (updateName) => {
    const newLetterName = updateName.target.value;
    setName(newLetterName);
  }

  const emailOnChange = (updateEmail) => {
    const newLetterEmail = updateEmail.target.value;
    setEmail(newLetterEmail);
  }

  const subjectOnChange = (updateSubject) => {
    const newLetterSubject = updateSubject.target.value;
    setSubject(newLetterSubject);
  }

  const messageOnChange = (messageSubject) => {
    const newLetterMessage = messageSubject.target.value;
    setMessage(newLetterMessage);
  }

  const validateEmailContent = (e) => {
    e.preventDefault();
    let counter = 0;
    
    if (name === "") {
      document.getElementById("nameField").style.border = "solid red 1.5px";
    } else if (name !== "") {
      document.getElementById("nameField").style.border = "unset";
      counter++;
    }
    
    if (email === ""){
      document.getElementById("mailField").style.border = "solid red 1.5px";
    } else if (email.indexOf("@") < 0 || email.indexOf(".")  < 0) {
      document.getElementById("mailField").style.border = "solid red 1.5px";
    } else {
      document.getElementById("mailField").style.border = "unset";
      counter++;
    }
    
    if (subject === ""){
      document.getElementById("subjectField").style.border = "solid red 1.5px";
    } else {
      document.getElementById("subjectField").style.border = "unset";
      counter++;
    }

    if (counter === 3){
      sendEmail(e)
    }
  }

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8hnyuzp', 'myOwnTemplate', e.target, '02pwphEzoiAty5jhJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
            e.target.reset();
  };
 
  return (  
    <div>
      <NavBar />
      <main id="content">
        <Presentation />
        <Projects />
        <About />
        <Contact 
          nameOnChange={nameOnChange}
          emailOnChange={emailOnChange}
          subjectOnChange={subjectOnChange}
          messageOnChange={messageOnChange}
          validateEmailContent={validateEmailContent}
        />
      </main>
    </div>
  )
}

export default App
