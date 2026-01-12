const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  description: {
    type: String,
    default: ""
  },

  mrp: {
    type: Number,
    required: true,
    min: 0
  },

  price: {
    type: Number // auto calculated
  },


  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },

  images: {
    type: [String],
    required: true
  },

  categories: {
    type: [String],
    required: true
  },

  inventory: {
    type: Number,
    default: 0
  },

  isActive: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
});

productSchema.pre("save", function (next) {

  if (!this.discount || this.discount === 0) {
    this.price = this.mrp;
    return next();
  }

  this.price = this.mrp - (this.mrp * this.discount) / 100;

  if (this.price < 0) this.price = 0;
  this.price = Math.round(this.price);

  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;