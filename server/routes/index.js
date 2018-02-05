const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

router.route('/api').get(fetchData)

async function fetchData (req, res) {
  const origin = process.env.AIRTABLE_API_URL
  const base = process.env.AIRTABLE_BASE
  const table = process.env.AIRTABLE_TABLE

  if (!origin || !base || !table) console.error('Please update .env file')

  const url = `${origin}/${base}/${table}`

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

module.exports = router
