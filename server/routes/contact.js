import express from 'express'
import { sendMessage, getMessages, markAsRead } from '../controllers/contactController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', sendMessage)
router.get('/', authMiddleware, getMessages)
router.put('/:id', authMiddleware, markAsRead)

export default router