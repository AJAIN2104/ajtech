const testimonials = [
  {
    name: 'Ananya Rao',
    role: 'Startup Founder',
    text: 'The company presentation felt polished, structured, and credible for a real client pitch.'
  },
  {
    name: 'Vikas Singh',
    role: 'Technical Mentor',
    text: 'This project balances frontend polish with a backend path that is practical for MERN interviews.'
  },
  {
    name: 'Neha Khanna',
    role: 'Product Consultant',
    text: 'The service sections and contact flow made the website feel much more professional than a student demo.'
  }
]

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Client voice</p>
        <h2>Testimonials add a trust layer that many student projects skip.</h2>
        <div className="card-grid three-col">
          {testimonials.map((item) => (
            <article className="info-card" key={item.name}>
              <p>“{item.text}”</p>
              <h3>{item.name}</h3>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials