import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SideElements from './components/SideElements.jsx'
import About from './components/About.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <SideElements />
      <Hero />
      <About />
      <section id="skills">Skills</section>
      <section id="projects">Projects</section>
      <section id="contact">Contact</section>
    </>
  );
}

export default App
