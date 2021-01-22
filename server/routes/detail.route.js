//REQUIRE
const express = require('express')
const router = express.Router()
const postsController = require('../controllers/detail.controller')

//GET CONTROLLER
router.get('/', postsController.getForm)

module.exports = router