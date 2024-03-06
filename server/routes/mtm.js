import express from 'express'
import { getPositions } from '../controllers/mtm.js'

const router = express.Router()

router.get('/', getPositions)

export default router
