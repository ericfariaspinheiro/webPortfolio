import './App.css'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import About from './components/About'


function App() {
  return (
    <div>
      <NavBar />
      <main id="content">
        <Presentation />
        <Projects />
        <About />
      </main>
    </div>
  )
}

export default App
