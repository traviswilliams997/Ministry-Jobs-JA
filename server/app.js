import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import mohRoutes from './routes/moh.js'
import mtmRoutes from './routes/mtm.js'
import miicRoutes from './routes/miic.js'
import moaRoutes from './routes/moa.js'

const app = express()
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

let corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173',
    'https://public-service-jobs-frontend.onrender.com',
  ],
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/moh', mohRoutes)
app.use('/api/mtm', mtmRoutes)
app.use('/api/miic', miicRoutes)
app.use('/api/moa', moaRoutes)

export default app
