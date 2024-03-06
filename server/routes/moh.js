import express from 'express'
import { getPositions } from '../controllers/moh.js'

const router = express.Router()

router.get('/', getPositions)

export default router
