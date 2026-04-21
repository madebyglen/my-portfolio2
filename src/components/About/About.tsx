import './About.css'

const About = () => {
  return (
    <section id="about" className="about">

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

          <h3>Understand users & goals</h3>

          <p>
            I begin by understanding user needs, business goals, and project
            requirements to ensure the final product solves real problems.
          </p>
        </div>

        <div className="approach-card">
          <span>02</span>

          <h3>Create clean UI layouts</h3>

          <p>
            I design structured and modern interfaces that are visually appealing,
            easy to navigate, and focused on a smooth user experience.
          </p>
        </div>

        <div className="approach-card">
          <span>03</span>

          <h3>Build responsive experiences</h3>

          <p>
            I develop websites that adapt seamlessly across desktops, tablets,
            and mobile devices while maintaining performance and usability.
          </p>
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