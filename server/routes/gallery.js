import express from 'express'
import { getImages, uploadImage, deleteImage } from '../controllers/galleryController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const router = express.Router()

router.get('/', getImages)
router.post('/upload', (req, res, next) => {
  next()
}, authMiddleware, upload.single('image'), uploadImage)
router.delete('/:id', authMiddleware, deleteImage)

export default router