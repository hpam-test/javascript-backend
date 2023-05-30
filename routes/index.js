const router = require('express').Router()
const productRoutes = require('./product')
const categoryMerkRoutes = require('./categorymerk')
const productTypeRoutes = require('./producttype')
const tCategoryRoutes = require('./t_category')

router.get('/', (req, res) => {
    res.send(`handling "/"`)
})

router.use('/products', productRoutes)
router.use('/category-merks', categoryMerkRoutes)
router.use('/product-types', productTypeRoutes)
router.use('/t-categories', tCategoryRoutes)

module.exports = router