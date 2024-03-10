import axios from 'axios'
import * as cheerio from 'cheerio'

export const getPositions = async (req, res) => {
  try {
    const miicUrl = 'https://www.moa.gov.jm/careers'

    const getTitles = async (url) => {
      const response = await axios(url)
      const moaHtml = response.data

      const titles = []
      try {
        const $ = cheerio.load(moaHtml)
        $('.views-field-title ', moaHtml).each(function () {
          const title = $(this).text()

          if (!titles.includes(title)) {
            titles.push(title)
          }
        })
      } catch (err) {
        console.log('Error', err)
      }

      return titles
    }

    const getTexts = async (url) => {
      const response = await axios(url)
      const miicHtml = response.data

      const texts = []
      try {
        const $ = cheerio.load(miicHtml)
        $('.views-field-field-job-summary', miicHtml).each(function () {
          const text = $(this).find('div .field-content').text()
          texts.push(text)
        })
      } catch (err) {
        console.log('Error', err)
      }

      return texts
    }

    const getUrls = async (url) => {
      const response = await axios(url)
      const miicHtml = response.data

      const urls = []
      try {
        const $ = cheerio.load(miicHtml)
        $('.views-field-view-node a', miicHtml).each(function () {
          const url = $(this).attr('href')

          urls.push(`https://www.moa.gov.jm${url}`)
        })
      } catch (err) {
        console.log('Error', err)
      }

      return urls
    }

    const titles = await getTitles(miicUrl)
    const texts = await getTexts(miicUrl)
    const urls = await getUrls(miicUrl)

    const positions = []

    for (let i = 0; i < titles.length; i++) {
      if (texts[i] !== undefined && urls[i] !== undefined) {
        const position = {
          title: titles[i],
          text: texts[i],
          urls: urls[i],
        }
        positions.push(position)
      }
    }

    res.status(200).json(positions)
  } catch (err) {
    console.log('getPositions Error', err)
  }
}
