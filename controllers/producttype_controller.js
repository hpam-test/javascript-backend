const { product_type } = require("../models")

class ProductTypeController {
    static async getAllProductType(req, res) {
        try {
            const data = await product_type.findAll({})

            res.status(200).json({
                page: 1,
                totalPages: 1,
                data
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = ProductTypeController