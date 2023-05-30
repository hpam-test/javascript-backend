const TCategoryController = require('../controllers/t_category_controller')
const router = require('express').Router()

router.get('', TCategoryController.getAllTCategory)

module.exports = router