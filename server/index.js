const PORT = 8000

import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'

const app = express()
const url = 'https://www.moh.gov.jm/careers/'

const getAllPositions = async (mohUrl) => {
  const positionsFormatted = []
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

  const getPostionsBody = async (positionUrls) => {
    const Body = await Promise.all(
      positionUrls.map(async (url) => {
        const bodies = []

        try {
          const response = await axios(url)
          const urlHtml = response.data

          const $ = cheerio.load(urlHtml)

          $('.blog-main ').each(function () {
            let salary
            let purpose
            for (let i = 0; i < 31; i++) {
              const res1 = $(this)
                .find(`.post-body-content p:nth-child(${i})`)
                .text()
              const res2 = $(this)
                .find(`.post-body-content p:nth-child(${i + 1})`)
                .text()
              if (res1.includes('Salary')) {
                salary = res1
              }
              if (res1.includes('JOB PURPOSE')) {
                purpose = res2
              }
            }

            const bodyObj = {
              salary: salary,
              purpose: purpose,
            }

            bodies.push(bodyObj)
          })
        } catch (err) {
          console.log('Error', err)
        }

        return bodies[0]
      })
    )

    return Body
  }
  const positionUrls = await getPostionsUrls(mohUrl)

  const positions = await getPostionsBody(positionUrls)

  const titles = await getPositionTitles(positionUrls)
  const dates = await getPositionDates(positionUrls)

  for (let i = 0; i < positionUrls.length; i++) {
    const formatted = {
      title: titles[i],
      date: dates[i],
      salary: positions[i].salary,
      purpose: positions[i].purpose,
    }

    positionsFormatted.push(formatted)
  }
  return positionsFormatted
}
const page1 = await getAllPositions(url)
const page2 = await getAllPositions(`${url}?pagenum=2`)
const page3 = await getAllPositions(`${url}?pagenum=3`)

const allPages = page1.concat(page2, page3)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
