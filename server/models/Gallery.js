import mongoose from 'mongoose'

const gallerySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true
  },
  location: {
    type: String,
    enum: ['india', 'canada', 'both'],
    default: 'both'
  }
}, { timestamps: true })

export default mongoose.model('Gallery', gallerySchema)