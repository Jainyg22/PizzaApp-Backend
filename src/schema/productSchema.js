const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    productName: {
        type : String,
        trim : true,
        required : [true, "Product name is mandatory"],
        minlength : [5, "Product name is at least 5 characters long"]
    },
    description : {
        type : String,
        maxlength : [200, "Maximum length is 200 characters long"],
        lowercase : true,
        trim : true,
    },
    productImage : {
        type : String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 10
    },
    price:{
        type : Number,
        required : [true, "Product price is mandatory"],
    },
    category:{
        type : String,
        enum : ['veg','non-veg','drinks','sides'],
        default : 'veg',
    },
    inStock:{
        type : Boolean,
        required : [true, "In Stock status is required"],
        default : true
    }
},{
    timestamps : true
})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;