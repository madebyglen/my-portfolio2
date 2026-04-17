import './Skills.css'

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaFigma
} from "react-icons/fa"

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiCss,
  SiVercel,
  SiFramer,
  SiCyberdefenders
} from "react-icons/si"

import { MdDesignServices, MdDevices } from "react-icons/md"
import { BsGridFill } from "react-icons/bs"

const skills = [
  {
    title: "Core Skills",
    items: [
      {
        name: "UI/UX Layout",
        icon: <MdDesignServices color="#ff9800" />
      },
      {
        name: "Frontend Dev",
        icon: <FaReact color="#61DBFB" />
      },
      {
        name: "Responsive Design",
        icon: <MdDevices color="#00bcd4" />
      },
      {
        name: "Component Design",
        icon: <BsGridFill color="#9c27b0" />
      }
    ]
  },

  {
    title: "Frontend Tech",
    items: [
      {
        name: "React",
        icon: <FaReact color="#61DBFB" />
      },
      {
        name: "CSS",
        icon: <SiCss color="#1572B6" />
      },
      {
        name: "JavaScript",
        icon: <SiJavascript color="#F7DF1E" />
      },
      {
        name: "TypeScript",
        icon: <SiTypescript color="#3178C6" />
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs color="#ffffff" />
      }
    ]
  },

  {
    title: "Learning",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs color="#68A063" />
      },
      {
        name: "DevOps",
        icon: <FaDocker color="#2496ED" />
      },
      {
        name: "Docker",
        icon: <FaDocker color="#2496ED" />
      },
      {
        name: "Cybersecurity",
        icon: <SiCyberdefenders color="#ff1744" />
      }
    ]
  },

  {
    title: "Tools",
    items: [
      {
        name: "GitHub",
        icon: <FaGithub color="#ffffff" />
      },
      {
        name: "Vercel",
        icon: <SiVercel color="#ffffff" />
      },
      {
        name: "Figma",
        icon: <FaFigma color="#F24E1E" />
      },
      {
        name: "Framer",
        icon: <SiFramer color="#0055FF" />
      }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>
      <p className="skills-sub">
        Crafting clean UI and scalable code
      </p>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={i} className="skill-card">
            <h3>{group.title}</h3>

            <div className="tags">
              {group.items.map((item, index) => (
                <span key={index}>
                  <i className="tag-icon">{item.icon}</i>
                  {item.name}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills