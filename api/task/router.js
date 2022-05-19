// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const task = Task.getAll()
        res.json(task)
    } catch (err){
        next(err)
    }
})
module.exports = router