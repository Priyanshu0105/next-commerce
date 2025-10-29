const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title:{ 
        type: String,
        required: true
    },
    description:{
        type: String ,
        default: ""
    },
    price:{
        type: Number ,
        required: true
    },
    images:{
        type:[String],
        required:true
    },
    inventory:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now // reference
    }
});

const Product = mongoose.model("Product",productSchema)

module.exports = Product;