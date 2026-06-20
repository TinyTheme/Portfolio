import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SideElements from './components/SideElements.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <SideElements />
      <Hero />
      <section id="about">About</section>
      <section id="skills">Skills</section>
      <section id="projects">Projects</section>
      <section id="contact">Contact</section>
    </>
  );
}

export default App
