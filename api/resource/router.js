// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resource = Resource.getAll()
        res.json(resource)
    } catch (err){
        next(err)
    }
})
module.exports = router