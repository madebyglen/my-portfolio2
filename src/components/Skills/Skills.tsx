import './Skills.css'

const skills = [
  {
    title: "Core Skills",
    items: ["UI/UX Layout", "Frontend Dev", "Responsive Design", "Component Design"]
  },
  {
    title: "Frontend Tech",
    items: ["React", "CSS", "JavaScript", "TypeScript", "Next.js"]
  },
  {
    title: "Learning",
    items: ["Node.js", "DevOps", "Docker", "Cybersecurity"]
  },
  {
    title: "Tools",
    items: ["GitHub", "Vercel", "Figma", "Framer"]
  }
]

const Skills = () => {
  return (
    <section id  = "skills"className="skills">

      <h2>Skills</h2>
      <p className="skills-sub">Crafting clean UI and scalable code</p>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={i} className="skill-card">
            <h3>{group.title}</h3>

            <div className="tags">
              {group.items.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills