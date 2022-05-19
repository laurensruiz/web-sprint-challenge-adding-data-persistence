// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const project = Project.getAll()
        res.json(project)
    } catch (err){
        next(err)
    }
})
module.exports = router