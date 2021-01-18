const mongoose = require("mongoose");
const ProductShema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  color:String,
  image: {
    type: Array,
    default:[]
  },
  shop: {
    type: mongoose.Schema.ObjectId,
    ref: 'Shop',
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }


}, {timestamps: true});
module.exports = mongoose.model("Product", ProductShema);