const ProductTypeController = require('../controllers/producttype_controller')
const router = require('express').Router()

router.get('', ProductTypeController.getAllProductType)

module.exports = router