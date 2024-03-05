const PORT = 8000
import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'

const app = express()
const mohUrl = 'https://www.moh.gov.jm/careers/'

const getPostionsUrls = async (mohUrl) => {
  const response = await axios(mohUrl)
  const mohHtml = response.data
  const urls = []

  try {
    const $ = cheerio.load(mohHtml)
    $('.card-content a ', mohHtml).each(function () {
      const positionUrl = $(this).attr('href')
      if (!urls.includes(positionUrl)) {
        urls.push(positionUrl)
      }
    })
  } catch {
    console.log('Error', err)
  }

  return urls
}

const getPositionTitles = async (positionUrls) => {
  const positionTitles = await Promise.all(
    positionUrls.map(async (url) => {
      const response = await axios(url)
      const urlHtml = response.data
      const titles = []

      try {
        const $ = cheerio.load(urlHtml)

        $('.page-title').each(function () {
          const title = $(this).text()
          if (!titles.includes(title)) {
            titles.push(title)
          }
        })
      } catch (err) {
        console.log('Error', err)
      }

      return titles[0]
    })
  )

  return positionTitles
}

const getPositionDates = async (positionUrls) => {
  const positionDates = await Promise.all(
    positionUrls.map(async (url) => {
      const response = await axios(url)
      const urlHtml = response.data
      const dates = []

      try {
        const $ = cheerio.load(urlHtml)

        $('.single-post-date').each(function () {
          const date = $(this).text()
          if (!dates.includes(date)) {
            dates.push(date)
          }
        })
      } catch (err) {
        console.log('Error', err)
      }

      return dates[0]
    })
  )

  return positionDates
}

const getPositions = async (positionUrls) => {
  const postions = await Promise.all(
    positionUrls.map(async (url) => {
      const response = await axios(url)
      const urlHtml = response.data
      const contents = []

      try {
        const $ = cheerio.load(urlHtml)

        $('.blog-main ').each(function () {
          const postion = $(this).text()
          if (!contents.includes(postion)) {
            contents.push(postion)
          }
        })
      } catch (err) {
        console.log('Error', err)
      }

      return contents[0]
    })
  )

  return postions
}
const positionUrls = await getPostionsUrls(mohUrl)

const positions = await getPositions(positionUrls)

const titles = await getPositionTitles(positionUrls)
const dates = await getPositionDates(positionUrls)

// console.log('Titles', titles[0])

// console.log('Positons', positions[0])

// console.log('Date', dates[0])

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
