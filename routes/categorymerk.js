const CategoryMerkController = require('../controllers/categorymerk_controller')
const router = require('express').Router()

router.get('', CategoryMerkController.getAllCategoryMerk)

module.exports = router