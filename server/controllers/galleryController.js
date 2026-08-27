import { v2 as cloudinary } from 'cloudinary'
import Gallery from '../models/Gallery.js'


// Saari photos lao
export const getImages = async (req, res) => {
  try {
    const { location } = req.query
    const filter = location ? { location } : {}
    const images = await Gallery.find(filter).sort({ createdAt: -1 })
    res.json(images)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// Photo upload 
export const uploadImage = async (req, res) => {
  try {
    const { location } = req.body

    // Cloudinary pe upload
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'farm-gallery' },
        (error, result) => {
          if (error) {
             console.log('Cloudinary error:', error)
            reject(error)
          }
          else {
            console.log('Cloudinary success:', result)
            resolve(result)
        }
        }
      ).end(req.file.buffer)
    })

    // Database mein save karo
    const image = new Gallery({
      imageUrl: result.secure_url,
      publicId: result.public_id,
      location: location || 'both'
    })
    await image.save()

    res.status(201).json(image)

  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// Photo delete karo
export const deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id)
    if (!image) {
      return res.status(404).json({ message: 'Image not found' })
    }

    // Cloudinary se delete
    await cloudinary.uploader.destroy(image.publicId)

    // Database se delete
    await Gallery.findByIdAndDelete(req.params.id)

    res.json({ message: 'Image deleted successfully' })

  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}