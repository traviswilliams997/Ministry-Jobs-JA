const PORT = 8000
import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'

const app = express()
const mohUrl = 'https://www.moh.gov.jm/careers/'

const headers = []

try {
  const response = await axios(mohUrl)

  const mohHtml = response.data

  const $ = cheerio.load(mohHtml)
  $('.page-title', mohHtml).each(function () {
    const title = $(this).text()
    headers.push(title)
  })
  console.log('Header', headers[0])
} catch (err) {
  console.log('Error ', err)
}

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
