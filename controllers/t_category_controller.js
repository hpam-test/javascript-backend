const { t_category } = require("../models")

class TCategoryController {
    static async getAllTCategory(req, res) {
        try {
            const data = await t_category.findAll({})

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

module.exports = TCategoryController


