const { category_merk } = require("../models")

class CategoryMerkController {
    static async getAllCategoryMerk(req, res) {
        try {
            const data = await category_merk.findAll({})

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

module.exports = CategoryMerkController


