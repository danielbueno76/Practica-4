'use strict'

const express = require('express')
const router = express.Router()

const Ad = require('../../models/Advertisement')

/* GET /api/advertisement */
// List of ads
router.get('/', async function (req, res, next) {
  try {
    const result = await Ad.list()
    res.json(result)
  } catch (err) {
    next(err)
  }
})

// GET /api/advertisement/:id
// Obtain an ad
router.get('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id

    const ad = await Ad.findOne({ _id: _id })

    if (!ad) {
      return res.status(404).json({ error: 'not found' })
    }
    res.json({ result: ad })
  } catch (err) {
    next(err)
  }
})

// POST /api/advertisement (body)
// Create an ad
router.post('/', async (req, res, next) => {
  try {
    const adData = req.body

    const ad = new Ad(adData)

    const adCreado = await ad.save()

    res.status(201).json({ result: adCreado })
  } catch (error) {
    next(error)
  }
})

// PUT /api/advertisement/:id (body)
// Update an ad
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id
    const adData = req.body

    const adActualizado = await Ad.findOneAndUpdate({ _id: _id }, adData, {
      new: true,
      useFindAndModify: false
    })

    if (!adActualizado) {
      res.status(404).json({ error: 'not found' })
      return
    }

    res.json({ result: adActualizado })
  } catch (error) {
    next(error)
  }
})

// DELETE /api/advertisement/:id
// Delete an ad
router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id

    await Ad.deleteOne({ _id: _id })

    res.json()
  } catch (error) {
    next(error)
  }
})

module.exports = router
