import './Contact.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>
      <p className="contact-sub">
        Let’s connect and build something amazing.
      </p>

      <div className="contact-grid">

        {/* EMAIL */}
        <a
          href="mailto:glenkmuigai@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="icon" />
          <span>glenkmuigai@gmail.com</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/madebyglen"
          target="_blank"
          className="contact-card"
        >
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="contact-card"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        {/* PHONE */}
        <a
          href="tel:+254700000000"
          className="contact-card"
        >
          <FaPhone className="icon" />
          <span>+254 790 896 494</span>
        </a>

      </div>

    </section>
  )
}

export default Contact