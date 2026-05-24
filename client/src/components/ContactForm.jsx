import { useState } from 'react'
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  service: '',
  message: ''
}

function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('')

    try {
      const { data } = await axios.post('/api/contact', formData)
      setStatus(data.message)
      setFormData(initialState)
    } catch (error) {
      setStatus(error?.response?.data?.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section section-soft" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="section-label">Get in touch</p>
          <h2>Turn this project into a real full-stack demo.</h2>
          <p className="muted">
            The form below sends data to the Express backend and stores inquiries in MongoDB.
            You can review them later from the admin page.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="service" placeholder="Service Needed" value={formData.service} onChange={handleChange} required />
          <textarea name="message" placeholder="Project Brief" value={formData.message} onChange={handleChange} required />
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Inquiry'}
          </button>
          {status && <p className="status-box">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default ContactForm