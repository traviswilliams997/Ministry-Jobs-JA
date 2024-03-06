import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import mohRoutes from './routes/moh.js'
import mtmRoutes from './routes/mtm.js'
import miicRoutes from './routes/miic.js'

const app = express()
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(express.json())

app.use('/api/moh', mohRoutes)
app.use('/api/mtm', mtmRoutes)
app.use('/api/miic', miicRoutes)

export default app
