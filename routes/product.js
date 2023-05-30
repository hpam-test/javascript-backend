const ProductController = require('../controllers/product_controller')
const router = require('express').Router()

router.get('', ProductController.getAllProducts)
router.get('/:id', ProductController.findByID)

module.exports = router