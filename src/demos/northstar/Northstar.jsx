import "./Northstar.css"

function Northstar() {
  return (
    <div className="northstar">

      {/* NAVBAR */}

      <nav className="ns-nav">

        <div className="ns-logo">
          NORTHSTAR<span>.</span>
        </div>

        <div className="ns-nav-links">
          <a href="#ns-about">About</a>
          <a href="#ns-programmes">Programmes</a>
          <a href="#ns-results">Results</a>
          <a href="#ns-contact">Contact</a>
        </div>

        <a href="#ns-contact" className="ns-nav-button">
          JOIN NOW
        </a>

      </nav>


      {/* HERO */}

      <section className="ns-hero">

        <div className="ns-hero-content">

          <p className="ns-tag">
            PERFORMANCE / FITNESS / DISCIPLINE
          </p>

          <h1>
            BUILT FOR
            <br />
            <span>MORE.</span>
          </h1>

          <p className="ns-hero-text">
            Elite personal training and performance coaching
            designed for people who refuse to settle.
          </p>

          <div className="ns-hero-buttons">

            <a href="#ns-programmes" className="ns-primary-button">
              EXPLORE PROGRAMMES
            </a>

            <a href="#ns-about" className="ns-secondary-button">
              DISCOVER NORTHSTAR →
            </a>

          </div>

        </div>

        <div className="ns-hero-stats">

          <div>
            <strong>250+</strong>
            <span>CLIENTS</span>
          </div>

          <div>
            <strong>8</strong>
            <span>YEARS EXPERIENCE</span>
          </div>

          <div>
            <strong>94%</strong>
            <span>GOAL SUCCESS</span>
          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section id="ns-about" className="ns-about">

        <div className="ns-section-label">
          01 / THE NORTHSTAR METHOD
        </div>

        <div className="ns-about-content">

          <h2>
            TRAIN WITH
            <br />
            <span>PURPOSE.</span>
          </h2>

          <div>

            <p>
              Northstar is built around one simple idea:
              training should have direction.
            </p>

            <p>
              Every programme combines intelligent strength
              training, conditioning and recovery to help
              you become stronger and perform better.
            </p>

            <a href="#ns-programmes" className="ns-text-link">
              OUR APPROACH →
            </a>

          </div>

        </div>

      </section>


      {/* PROGRAMMES */}

      <section id="ns-programmes" className="ns-programmes">

        <div className="ns-section-label">
          02 / TRAINING PROGRAMMES
        </div>

        <div className="ns-programme-heading">

          <h2>
            CHOOSE YOUR
            <br />
            <span>MISSION.</span>
          </h2>

          <p>
            Structured programmes designed around
            different goals and experience levels.
          </p>

        </div>


        <div className="ns-programme-grid">

          <article className="ns-programme">

            <div className="ns-programme-number">
              01
            </div>

            <div>

              <p className="ns-programme-type">
                FOUNDATION
              </p>

              <h3>
                BUILD
              </h3>

              <p>
                Build strength, improve movement and
                establish the foundations for long-term
                progress.
              </p>

            </div>

            <span className="ns-arrow">
              ↗
            </span>

          </article>


          <article className="ns-programme ns-featured">

            <div className="ns-programme-number">
              02
            </div>

            <div>

              <p className="ns-programme-type">
                PERFORMANCE
              </p>

              <h3>
                PERFORM
              </h3>

              <p>
                Advanced strength and conditioning for
                athletes and performance-focused clients.
              </p>

            </div>

            <span className="ns-arrow">
              ↗
            </span>

          </article>


          <article className="ns-programme">

            <div className="ns-programme-number">
              03
            </div>

            <div>

              <p className="ns-programme-type">
                TRANSFORMATION
              </p>

              <h3>
                TRANSFORM
              </h3>

              <p>
                A complete approach combining training,
                nutrition and accountability.
              </p>

            </div>

            <span className="ns-arrow">
              ↗
            </span>

          </article>

        </div>

      </section>


      {/* RESULTS */}

      <section id="ns-results" className="ns-results">

        <div className="ns-section-label">
          03 / CLIENT RESULTS
        </div>

        <div className="ns-result-layout">

          <div>

            <h2>
              PROGRESS
              <br />
              <span>IS EARNED.</span>
            </h2>

            <p>
              Real progress comes from consistency,
              intelligent programming and showing up
              when it matters.
            </p>

          </div>


          <div className="ns-result-card">

            <div className="ns-result-top">
              <span>CLIENT / ALEX</span>
              <span>12 MONTHS</span>
            </div>

            <div className="ns-result-number">
              +42%
            </div>

            <div className="ns-result-bottom">
              <span>STRENGTH IMPROVEMENT</span>
              <span>↗</span>
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="ns-contact" className="ns-contact">

        <div>

          <p className="ns-tag">
            READY WHEN YOU ARE
          </p>

          <h2>
            FIND YOUR
            <br />
            <span>NORTHSTAR.</span>
          </h2>

        </div>

        <div className="ns-contact-right">

          <p>
            Tell us where you are now and where
            you want to go.
          </p>

          <a href="mailto:hello@northstarfitness.example">
            START YOUR JOURNEY →
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="ns-footer">

        <div className="ns-logo">
          NORTHSTAR<span>.</span>
        </div>

        <p>
          PERFORMANCE / FITNESS / DISCIPLINE
        </p>

        <span>
          © 2026 Northstar Fitness
        </span>

      </footer>

    </div>
  )
}

export default Northstar