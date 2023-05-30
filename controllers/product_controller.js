const { Op } = require('sequelize');
const { product } = require("../models")

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 8; 
            const product_type_ids = req.query.product_type_ids
            const category_merk_ids = req.query.category_merk_ids
            const category_ids = req.query.category_ids

            const whereQuery = {};
            if (product_type_ids) {
                const productTypeIDsArray = product_type_ids.split(',').map(Number);
                whereQuery.tipe_produk = { [Op.in]: productTypeIDsArray };
            }
            if (category_merk_ids) {
                const productTypeIDsArray = category_merk_ids.split(',').map(Number);
                whereQuery.id_category_brand = { [Op.in]: productTypeIDsArray };
            }
            if (category_ids) {
                const productTypeIDsArray = category_ids.split(',').map(Number);
                whereQuery.id_category = { [Op.in]: productTypeIDsArray };
            }

            const { count, rows } = await product.findAndCountAll({
                where: whereQuery,
                offset: (page - 1) * limit,
                limit: limit,
            })
            const totalPages = Math.ceil(count / limit);

            res.status(200).json({
                page,
                totalPages,
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    static async findByID(req, res) {
        try {
            const { id } = req.params
            const data = await product.findOne({ 
                where: { 
                    id 
                } 
            });
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = ProductController


