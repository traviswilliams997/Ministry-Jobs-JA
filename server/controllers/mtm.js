import axios from 'axios'
import * as cheerio from 'cheerio'

export const getPositions = async (req, res) => {
  try {
    const mtmUrl = 'https://mtm.gov.jm/careers/'

    const getTitles = async (url) => {
      const response = await axios(url)
      const mtmHtml = response.data

      const titles = []
      try {
        const $ = cheerio.load(mtmHtml)
        $('.wp-block-heading ', mtmHtml).each(function () {
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
      const mtmHtml = response.data

      const texts = []
      try {
        const $ = cheerio.load(mtmHtml)
        $('.card-description p ', mtmHtml).each(function () {
          const text = $(this).text()
          texts.push(text)
        })
      } catch (err) {
        console.log('Error', err)
      }

      return texts
    }

    const getUrls = async (url) => {
      const response = await axios(url)
      const mtmHtml = response.data

      const urls = []
      try {
        const $ = cheerio.load(mtmHtml)
        $('.card-description a ', mtmHtml).each(function () {
          const url = $(this).attr('href')
          urls.push(url)
        })
      } catch (err) {
        console.log('Error', err)
      }

      return urls
    }

    const titles = await getTitles(mtmUrl)
    const texts = await getTexts(mtmUrl)
    const urls = await getUrls(mtmUrl)

    const positions = []

    for (let i = 0; i < titles.length; i++) {
      const position = {
        title: titles[i],
        text: texts[i],
        urls: urls[i],
      }

      positions.push(position)
    }

    res.status(200).json(positions)
  } catch (err) {
    console.log('getPostions Error', err)

    res.status(404).json({ message: err })
  }
}
