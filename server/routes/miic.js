import express from 'express'
import { getPositions } from '../controllers/miic.js'

const router = express.Router()

router.get('/', getPositions)

export default router
