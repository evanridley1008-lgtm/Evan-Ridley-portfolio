import { useState } from "react"
import "./index.css"
import Northstar from "./demos/northstar/Northstar"

function Portfolio() {
  return (
    <div className="site">

      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="logo">
          Evan Ridley
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      <main>

        {/* HERO */}

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="eyebrow">
              WEB DEVELOPER
            </p>

            <h1>
              I build and fix
              <span> websites.</span>
            </h1>

            <p className="hero-description">
              I help businesses and individuals build,
              improve and fix modern websites and web
              applications.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="button primary"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="button secondary"
              >
                Contact me
              </a>

            </div>

          </div>

        </section>


        {/* SERVICES */}

        <section id="services" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              WHAT I DO
            </p>

            <h2>
              Services
            </h2>

            <p>
              Practical web development help for small
              projects, websites and applications.
            </p>

          </div>


          <div className="cards">

            <div className="card">

              <div className="card-number">
                01
              </div>

              <h3>
                Website Fixes
              </h3>

              <p>
                Fix broken layouts, buttons, navigation,
                responsive issues and other HTML, CSS and
                JavaScript problems.
              </p>

            </div>


            <div className="card">

              <div className="card-number">
                02
              </div>

              <h3>
                React Fixes
              </h3>

              <p>
                Debug React and Vite projects, fix components,
                errors, layouts and broken functionality.
              </p>

            </div>


            <div className="card">

              <div className="card-number">
                03
              </div>

              <h3>
                Small Features
              </h3>

              <p>
                Add pages, UI improvements, forms,
                functionality and other small features
                to existing projects.
              </p>

            </div>

          </div>

        </section>


        {/* PROJECTS */}

        <section id="projects" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              MY WORK
            </p>

            <h2>
              Projects
            </h2>

            <p>
              A selection of projects I've built while
              developing my web development skills.
            </p>

          </div>


          <div className="projects">


            {/* NORTHSTAR */}

            <article className="project">

              <div className="project-preview northstar-preview">

                <div className="preview-content">

                  <span>
                    NORTHSTAR
                  </span>

                  <strong>
                    FITNESS
                  </strong>

                  <small>
                    TRAIN SMARTER
                  </small>

                </div>

              </div>


              <div className="project-content">

                <div className="project-top">

                  <span className="project-type">
                    WEBSITE
                  </span>

                  <span className="project-number">
                    01
                  </span>

                </div>

                <h3>
                  Northstar Fitness
                </h3>

                <p>
                  A responsive fictional fitness business
                  website built to practise modern layout,
                  navigation and responsive design.
                </p>

                <div className="tech">

                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>

                </div>

                <button
                  className="project-link"
                  onClick={() => {
                    window.location.hash = "northstar"
                  }}
                >
                  View project →
                </button>

              </div>

            </article>


            {/* PROJECT TWO */}

            <article className="project">

              <div className="project-preview dashboard-preview">

                <div className="fake-dashboard">

                  <div className="fake-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="fake-main">

                    <div className="fake-header"></div>

                    <div className="fake-cards">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                    <div className="fake-chart"></div>

                  </div>

                </div>

              </div>


              <div className="project-content">

                <div className="project-top">

                  <span className="project-type">
                    APPLICATION
                  </span>

                  <span className="project-number">
                    02
                  </span>

                </div>

                <h3>
                  Dashboard Interface
                </h3>

                <p>
                  A responsive dashboard concept focused
                  on clean UI, reusable components and
                  structured React development.
                </p>

                <div className="tech">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>

                </div>

              </div>

            </article>


            {/* PROJECT THREE */}

            <article className="project">

              <div className="project-preview app-preview">

                <div className="app-window">

                  <div className="app-top"></div>

                  <div className="app-body">

                    <div className="app-circle"></div>

                    <div className="app-lines">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  </div>

                </div>

              </div>


              <div className="project-content">

                <div className="project-top">

                  <span className="project-type">
                    WEB APP
                  </span>

                  <span className="project-number">
                    03
                  </span>

                </div>

                <h3>
                  Web Application
                </h3>

                <p>
                  A small application concept using React
                  with plans for database functionality
                  and authentication.
                </p>

                <div className="tech">

                  <span>React</span>
                  <span>Supabase</span>
                  <span>JavaScript</span>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* SKILLS */}

        <section id="skills" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              TECHNOLOGIES
            </p>

            <h2>
              Skills
            </h2>

          </div>


          <div className="skills">

            <div className="skill">
              <span>01</span>
              HTML
            </div>

            <div className="skill">
              <span>02</span>
              CSS
            </div>

            <div className="skill">
              <span>03</span>
              JavaScript
            </div>

            <div className="skill">
              <span>04</span>
              React
            </div>

            <div className="skill">
              <span>05</span>
              Vite
            </div>

            <div className="skill">
              <span>06</span>
              Python
            </div>

            <div className="skill">
              <span>07</span>
              Supabase
            </div>

            <div className="skill">
              <span>08</span>
              Git
            </div>

          </div>

        </section>


        {/* ABOUT */}

        <section className="about section">

          <div>

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Building useful things
              <span> with code.</span>
            </h2>

          </div>


          <div className="about-text">

            <p>
              I'm Evan, a developing web developer focused
              on building practical websites and applications.
            </p>

            <p>
              I'm particularly interested in React,
              JavaScript and solving technical problems
              in existing projects.
            </p>

          </div>

        </section>


        {/* CONTACT */}

        <section id="contact" className="contact">

          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Have a project that needs help?
          </h2>

          <p>
            If you have a website that needs fixing,
            improving or adding to, get in touch.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="button primary"
          >
            Contact me
          </a>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <div>
          Evan Ridley
        </div>

        <p>
          Web Developer
        </p>

        <span>
          © 2026 Evan Ridley
        </span>

      </footer>

    </div>
  )
}


function App() {

  const [page, setPage] = useState(
    window.location.hash === "#northstar"
      ? "northstar"
      : "portfolio"
  )

  const openNorthstar = () => {
    window.location.hash = "northstar"
    setPage("northstar")
  }

  const goBack = () => {
    window.location.hash = ""
    setPage("portfolio")
  }

  if (page === "northstar") {
    return (
      <div>

        <button
          onClick={goBack}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1000,
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#111",
            color: "white",
            cursor: "pointer"
          }}
        >
          ← Back to portfolio
        </button>

        <Northstar />

      </div>
    )
  }

  return (
    <div onClick={(event) => {

      if (
        event.target.classList.contains("project-link")
      ) {
        openNorthstar()
      }

    }}>
      <Portfolio />
    </div>
  )
}

export default App