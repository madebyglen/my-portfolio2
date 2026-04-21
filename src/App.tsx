import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* <section id="home" className="hero">
        <h1>Hi, I'm Glen 👋</h1>
        <h2 className="title">
          Frontend Developer | Future Full-Stack Engineer | Cybersecurity Enthusiast
        </h2>
        <p className="tagline">
          I build modern web applications and continuously grow in backend, DevOps, and security.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">Projects</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </div> */}
      {/* </section> */}
       <Hero />
       <About />
       <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App