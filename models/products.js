var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slider: {
        type: Boolean,
        default: false
    },
    home: {
        type: Boolean,
        default: false
    },
    principal: {
        type: Boolean,
        default: false
    },
    hot: {
        type: Boolean,
        default: false
    },
    new: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: true,
        default: "0"
    },
    stock: {
        type: Number,
        required: true,
        default: "0"
    },
    category: {
        type: String,
        default: "Uncategorized"
    },
    seller: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    excerpt: {
        type: String
    },
    img1: {
        type: String,
        default: ""
    },
    img2: {
        type: String,
        default: ""
    },
    img3: {
        type: String,
        default: ""
    },
    img4: {
        type: String,
        default: ""
    },
    img5: {
        type: String,
        default: ""
    },
    img6: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('Product', ProductSchema);