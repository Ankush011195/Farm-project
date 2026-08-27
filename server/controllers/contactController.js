import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

// User ka message save karo + email bhejo
export const sendMessage = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body

    // Validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Database mein save karo
    const contact = new Contact({ name, phone, email, message })
    await contact.save()

    // Transporter function ke andar banao — tab .env ready hogi
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Email bhejo
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    res.status(201).json({ message: 'Message sent successfully!' })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Admin — saare messages dekho
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// Admin — message read mark karo
export const markAsRead = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id)
    if (!message) {
      return res.status(404).json({ message: 'Message not found' })
    }
    await Contact.findByIdAndUpdate(req.params.id, { isRead: true })
    res.json({ message: 'Marked as read' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}