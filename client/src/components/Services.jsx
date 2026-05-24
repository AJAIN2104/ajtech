const services = [
  {
    title: 'Business Websites',
    text: 'Responsive company websites with strong service presentation and lead generation.'
  },
  {
    title: 'Admin Dashboards',
    text: 'Internal panels for users, reports, support tickets, and workflow management.'
  },
  {
    title: 'REST API Development',
    text: 'Express APIs for forms, authentication, CRUD modules, and business logic.'
  },
  {
    title: 'MongoDB Integration',
    text: 'Schema design, database connection, and data storage for scalable products.'
  },
  {
    title: 'Maintenance & Support',
    text: 'Post-launch bug fixes, updates, and performance improvements.'
  },
  {
    title: 'Custom MERN Solutions',
    text: 'Full-stack applications built for startups, agencies, and service brands.'
  }
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-label">Core services</p>
        <h2>Everything an IT service company should show clearly.</h2>
        <div className="card-grid three-col">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services