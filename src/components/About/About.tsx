import './About.css'

const About = () => {
  return (
    <section id = "about" className="about">

      <h2>About Me</h2>

      <p className="about-desc">
        I am a frontend developer passionate about crafting clean, intuitive,
        and responsive digital experiences. I focus on turning ideas into
        seamless interfaces while expanding into backend, DevOps, and cybersecurity.
      </p>

      {/* APPROACH */}
      <div className="approach">
        <div className="approach-card">
          <span>01</span>
          <p>Understand users & goals</p>
        </div>

        <div className="approach-card">
          <span>02</span>
          <p>Create clean UI layouts</p>
        </div>

        <div className="approach-card">
          <span>03</span>
          <p>Build responsive experiences</p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div>
          <h3>02+</h3>
          <p>Years Learning</p>
        </div>

        <div>
          <h3>5+</h3>
          <p>Projects</p>
        </div>

        <div>
          <h3>05+</h3>
          <p>Technologies</p>
        </div>
      </div>

    </section>
  )
}

export default About