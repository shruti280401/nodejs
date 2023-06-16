const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand:String,
    catagory:String
});
module.exports= mongoose.model('products', ProductsSchema);