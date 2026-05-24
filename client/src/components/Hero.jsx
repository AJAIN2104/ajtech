function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="section-label"> IT service company</p>
          <h1>Modern websites, dashboards, and APIs for growing businesses.</h1>
          <p className="hero-text">
            StackNova builds responsive websites, admin systems, and full-stack MERN products
            with clean design, scalable code, and practical business value.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start Project</a>
            <a href="#work" className="btn btn-secondary">View Work</a>
          </div>
        </div>
        <div className="hero-card">
          <p className="code-title">project-overview</p>
          <pre>{`const stack = ['MongoDB', 'Express', 'React', 'Node'];

const services = {
  websites: true,
  dashboards: true,
  apis: true,
  support: true
};

export default 'Fast UI + clean backend';`}</pre>
        </div>
      </div>
    </section>
  )
}

export default Hero