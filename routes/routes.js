const express = require('express')
const controllers = require('../controllers/controllers')
const router = express.Router()

router.get('/', controllers.getPage)

module.exports = router
