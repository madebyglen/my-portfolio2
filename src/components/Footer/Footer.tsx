import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT SIDE - LOGO */}
      <div className="footer-logo">
        <img src="/madebyglen.logo.jpg" alt="Logo" />
      </div>

      {/* RIGHT SIDE - COPYRIGHT */}
      <p className="footer-copy">
        © 2026. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer