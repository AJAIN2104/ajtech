function About() {
  return (
    <section className="section section-soft" id="about">
      <div className="container split-layout">
        <div>
          <p className="section-label">Why this project matters</p>
          <h2>A job-ready portfolio project, not just a basic landing page.</h2>
          <p className="muted">
            Recruiters look for more than syntax. This project demonstrates layout planning,
            business presentation, API thinking, responsive design, and a practical data flow.
          </p>
        </div>
        <div className="card-stack">
          <article className="info-card">
            <h3>Professional positioning</h3>
            <p>Clear company messaging, service breakdown, and trust-building sections.</p>
          </article>
          <article className="info-card">
            <h3>Full-stack path</h3>
            <p>React frontend connected to Express APIs with MongoDB inquiry storage.</p>
          </article>
          <article className="info-card">
            <h3>Admin extension</h3>
            <p>An admin page helps prove CRUD skills and real-world project thinking.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About