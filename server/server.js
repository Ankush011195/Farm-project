import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { v2 as cloudinary } from 'cloudinary'
import authRoutes from './routes/auth.js'
import galleryRoutes from './routes/gallery.js'
import contactRoutes from './routes/contact.js'

const app = express()
app.use(cors())
app.use(express.json())

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/contact', contactRoutes)

app.get('/', (req, res) => {
  res.send('Server chal raha hai!')
})


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected!')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch((err) => console.log(err))