import './Projects.css'

const projects = [
  {
    title: "Event Management System",
    desc: "A full system with event booking, user dashboard, and admin panel.",
    tech: ["React", "PHP", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with React and TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Student Management System",
    desc: "Desktop system for managing students, grades, and attendance.",
    tech: ["VB.NET", "MySQL"],
    github: "#",
    live: "#"
  }
]

const Projects = () => {
  return (
    <section id = "projects" className="projects">

      <h2>Projects</h2>
      <p className="projects-sub">
        Some of the work I’ve built while learning and growing
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">

            <h3>{project.title}</h3>
            <p className="desc">{project.desc}</p>

            {/* TECH TAGS */}
            <div className="tags">
              {project.tech.map((t, index) => (
                <span key={index}>{t}</span>
              ))}
            </div>

            {/* LINKS */}
            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live</a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects