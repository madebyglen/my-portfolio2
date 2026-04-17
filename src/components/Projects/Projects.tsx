import './Projects.css'

const projects = [
  {
    title: "Mivern Solutions",
    image: "/projects/event-home.jpg",
    desc: "A website that showcases the services and projects of Mivern Solutions, a web design company.",
    tech: ["React", "PHP", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio-home.jpg",
    desc: "My personal portfolio built with React and TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/madebyglen/my-portfolio2",
    live: "#"
  },
  {
    title: "Student Management System",
    image: "/projects/student-home.jpg",
    desc: "Desktop system for managing students, grades, and attendance.",
    tech: ["VB.NET", "MySQL"],
    github: "#",
    live: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>
      <p className="projects-sub">
        Some of the work I’ve built while learning and growing
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">

            {/* PROJECT IMAGE */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="desc">{project.desc}</p>

              <div className="tags">
                {project.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects