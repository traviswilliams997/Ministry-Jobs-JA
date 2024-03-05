const PORT = 8000
import axios from 'axios'
import cheerio from 'cheerio'
import express from 'express'

const app = express()

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
