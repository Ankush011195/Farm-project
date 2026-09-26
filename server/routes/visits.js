import express from 'express'
import { submitVisit, getVisits, updateVisitStatus } from '../controllers/visitController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', submitVisit)                          // public for form submit 
router.get('/', authMiddleware, getVisits)              // admin: for list 
router.put('/:id', authMiddleware, updateVisitStatus)   // admin: approve/decline/info

export default router