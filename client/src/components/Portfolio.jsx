function Portfolio() {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section-label">Sample work</p>
        <h2>Case-study style projects that make your site feel real.</h2>
        <div className="card-grid two-col">
          <article className="project-card feature">
            <h3>Healthcare Booking Platform</h3>
            <p>Appointment management, admin panel, doctor directory, and form workflows.</p>
            <div className="tags">
              <span>React</span><span>Node.js</span><span>MongoDB</span><span>JWT</span>
            </div>
          </article>
          <article className="project-card">
            <h3>Logistics Dashboard</h3>
            <p>Delivery status views, reporting cards, and role-based admin controls.</p>
          </article>
          <article className="project-card">
            <h3>EdTech Company Website</h3>
            <p>Course showcase, lead form integration, and conversion-focused sections.</p>
          </article>
          <article className="project-card">
            <h3>Support Ticket Module</h3>
            <p>Issue tracking, service request forms, and inquiry status management.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio