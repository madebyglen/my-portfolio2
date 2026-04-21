import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo"> 

      <img src="madebyglen.logo.jpg" alt="profile" />
      </div>

      {/* CENTER NAV */}
      {/* <nav className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav> */}

      {/* RIGHT BUTTON */}
      <div className="nav-right">
        <a href="#contact" className="talk-btn">Let’s Talk</a>
      </div>

    </header>
  )
}

export default Navbar