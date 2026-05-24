const steps = [
  'Understand business goals and required features.',
  'Design clean UI sections and responsive layouts.',
  'Build frontend and backend modules using MERN.',
  'Deploy, test, and improve based on feedback.'
]

function Process() {
  return (
    <section className="section section-soft" id="process">
      <div className="container">
        <p className="section-label">Delivery process</p>
        <h2>A simple workflow that makes the company look organized.</h2>
        <div className="card-grid two-col">
          {steps.map((step, index) => (
            <article className="process-card" key={index}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process