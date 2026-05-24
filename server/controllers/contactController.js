const Contact = require('../models/Contact')

const submitContact = async (req, res) => {
  try {
    const { name, email, service, message } = req.body

    if (!name || !email || !service || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const contact = await Contact.create({ name, email, service, message })

    return res.status(201).json({
      message: 'Inquiry submitted successfully',
      data: contact
    })
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    return res.status(200).json(contacts)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)

    if (!contact) {
      return res.status(404).json({ message: 'Inquiry not found' })
    }

    return res.status(200).json({ message: 'Inquiry deleted successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  submitContact,
  getContacts,
  deleteContact
}