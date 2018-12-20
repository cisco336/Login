var Products = require('../models/products');
var config = require('../config/config');

// All Products
exports.allProducts = (req, res) => {
    Products.find({})
        .then(
            products => {
                if (products == []) {
                    return res.status(400).send({'msg': 'No products on DB.'});
                }
                return res.status(200).json(products);
            })
        .catch((err) => { console.error(err) });
};

// Add Product
// To do: use authorization
exports.addProduct = (req, res) => {
    Products.create(req.body)
        .then(res.send('Product created'))
        .catch((err) => { console.error(err) });
};

// Get single product
exports.getProduct = (req, res) => {
    Products.findById(req.params.id)
        .then(
            product => {
                if (product === null || product ===undefined) {
                    return
                    // To do
                }
                return res.status(200).json(product);
            }
        )
        .catch();
}