
import './App.css'
import Hero from "./components/Hero/Hero.tsx";
import Navbar from './components/Navbar/NavBar.tsx';
import Projects from './components/Projects/Projects.tsx';
import Skills from './components/Skills/Skills.tsx';
import Contact from './components/Contact/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';


function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
