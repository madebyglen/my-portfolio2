import './Hero.css'

const Hero = () => {
  return (
    <section id = "home"className="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <p className="intro"> Hey, I'm Glen</p>

          <h1>
            Front-End <br />
            Developer
          </h1>

          <p className="description">
            I build clean, modern, and responsive web applications.
            Currently growing into backend, DevOps, and cybersecurity.
          </p>

          <button className="btn-primary">Download CV</button>

          <div className="socials">
            <span>🔗</span>
            <span>🐱</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <img src="/glen.jpg" alt="profile" />
        </div>

      </div>

    </section>
  )
}

export default Hero