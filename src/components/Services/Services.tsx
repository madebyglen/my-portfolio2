import './Services.css'

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive interfaces using React, HTML, CSS and JavaScript."
  },
  {
    title: "Backend (Learning)",
    desc: "Currently learning server-side development and APIs."
  },
  {
    title: "DevOps (Learning)",
    desc: "Exploring deployment, CI/CD, and cloud tools."
  },
  {
    title: "Cybersecurity",
    desc: "Learning system security and vulnerability analysis."
  }
]

const Services = () => {
  return (
    <section id = "services"className="services">
      <h2>What I Do</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services