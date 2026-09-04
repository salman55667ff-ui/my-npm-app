import './App.css'
import profile from "./assets/hero.png";
import cv from "./assets/CV.pdf";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <h2>Salman Sami</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home">
        <div className="hero-content">
          <img src={profile} alt="Salman Sami" />

          <p className="intro">HELLO, I'M</p>

          <h1>Salman Sami</h1>

          <h2>Software Engineer</h2>

          <p className="hero-text">
            I build modern, responsive and user-friendly web applications
            using modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            <a
              href={cv}
              download="Salman-Sami-CV.pdf"
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-content">
          <div className="about-text">
            <p className="intro">ABOUT ME</p>

            <h2>Building Digital Solutions With Code</h2>

            <p>
              I'm a Software Engineer passionate about building modern,
              responsive and user-friendly applications.
            </p>

            <p>
              I enjoy working with frontend and backend technologies,
              developing APIs, working with databases, and learning
              cloud and modern software development practices.
            </p>

            <a href="#contact" className="primary-btn">
              Let's Work Together
            </a>
          </div>

          <div className="about-box">
            <div>
              <h3>Software Engineer</h3>
              <p>Web & Backend Development</p>
            </div>

            <div>
              <h3>Problem Solver</h3>
              <p>Building practical digital solutions</p>
            </div>

            <div>
              <h3>Always Learning</h3>
              <p>Exploring modern technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>My Skills</h2>

        <p className="section-description">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>React</h3>
            <p>Building modern and responsive user interfaces.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Creating interactive and dynamic web applications.</p>
          </div>

          <div className="skill-card">
            <h3>Python</h3>
            <p>Backend development, automation and programming.</p>
          </div>

          <div className="skill-card">
            <h3>FastAPI</h3>
            <p>Building fast and scalable REST APIs.</p>
          </div>

          <div className="skill-card">
            <h3>MySQL</h3>
            <p>Managing and working with relational databases.</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Version control and professional development workflow.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>My Projects</h2>

        <p className="section-description">
          Some of the projects I have built using modern technologies.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>TruthLens</h3>

            <p>
              An AI-powered fake news detection and verification platform
              designed to analyze news and help users identify misleading
              information.
            </p>

            <div className="project-tech">
              <span>Flutter</span>
              <span>FastAPI</span>
              <span>MySQL</span>
              <span>AI</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>SmartOps</h3>

            <p>
              An AI-powered employee task and workflow management system
              designed to help teams organize tasks and improve productivity.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>AI</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>React Web Projects</h3>

            <p>
              Modern responsive web applications built with React,
              JavaScript, HTML and CSS.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-content">
          <div className="contact-text">
            <p className="intro">CONTACT</p>

            <h2>Let's Build Something Together</h2>

            <p>
              Have a project idea or want to work together?
              Feel free to get in touch.
            </p>
          </div>

          <div className="contact-card">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=salman55667ff@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>Email</span>
              <strong>salman55667ff@gmail.com</strong>
            </a>

            <a
              href="https://github.com/salman55667ff-ui"
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>View GitHub Profile</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/salman-sami-517797371"
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>View LinkedIn Profile</strong>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Salman Sami. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App