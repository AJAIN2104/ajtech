import { useEffect, useState } from 'react'
import axios from 'axios'

function Admin() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('https://ajtech-y7ae.onrender.com/api/contact')
      setContacts(data)
      setError('')
    } catch (err) {
      setError('Failed to load inquiries')
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://ajtech-y7ae.onrender.com/api/contact/${id}`)
      setContacts((prev) => prev.filter((item) => item._id !== id))
    } catch (err) {
      setError('Failed to delete inquiry')
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <main className="admin-page">
      <div className="container">
        <div className="admin-topbar">
          <div>
            <p className="section-label">Admin dashboard</p>
            <h1>Contact inquiries</h1>
            <p className="muted">Review leads submitted from the website form.</p>
          </div>
          <a className="btn btn-secondary" href="/">Back to website</a>
        </div>

        {loading && <p className="status-box">Loading inquiries...</p>}
        {error && <p className="status-box error">{error}</p>}

        {!loading && contacts.length === 0 && (
          <p className="status-box">No inquiries found yet.</p>
        )}

        <div className="admin-grid">
          {contacts.map((contact) => (
            <article className="admin-card" key={contact._id}>
              <div className="admin-card-head">
                <h3>{contact.name}</h3>
                <button className="btn btn-danger" onClick={() => deleteContact(contact._id)}>
                  Delete
                </button>
              </div>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Service:</strong> {contact.service}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p className="muted small-text">
                Submitted: {new Date(contact.createdAt).toLocaleString()}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Admin 