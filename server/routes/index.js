const express = require('express')
const fetch = require('node-fetch')
const path = require('path')

const router = express.Router()

router.route('/api').get(fetchData)
router.route('*').get(indexPage)

async function fetchData (req, res) {
  const limit = Number(req.query.limit) || 20

  const origin = process.env.AIRTABLE_API_URL
  const base = process.env.AIRTABLE_BASE
  const table = process.env.AIRTABLE_TABLE

  if (!origin || !base || !table) console.error('Please update .env file')

  const url = `${origin}/${base}/${table}?maxRecords=${limit}`

  const key = process.env.AIRTABLE_API_KEY
  const version = process.env.AIRTABLE_API_VERSION
  const options = {
    headers: {
      Authorization: `Bearer ${key}`,
      'X-API-VERSION': version
    }
  }

  const response = await fetch(url, options)
  const json = await response.json()

  return res.status(200).json(json)
}

function indexPage (req, res) {
  return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
}

module.exports = router
