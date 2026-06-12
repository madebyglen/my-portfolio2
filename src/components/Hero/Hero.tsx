import './Hero.css'

const Hero = () => {
  return (
    <section id = "home"className="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <p className="intro"> Hey, I'm Glen</p>

          <h1>
            Front-End Developer<br />
          Junior IT Specialist
          </h1>

          <p className="description">
            I build clean, modern, and responsive web applications.
          </p>

          {/* <button className="btn-primary">Download CV</button>

          <div className="socials">
            <span>🔗</span>
            <span>🐱</span>
          </div> */}
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