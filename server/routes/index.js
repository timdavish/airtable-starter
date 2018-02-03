const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

router.route('/api').get(fetchData)

async function fetchData (req, res) {
  const url = ''
  const key = ''
  const options = {
    headers: { Authorization: `Bearer ${key}`}
  }

  const response = await fetch(url, options)
  const json = await response.json()

  return res.status(200).json(json)
}

module.exports = router
