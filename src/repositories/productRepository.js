const Product = require('../schema/productSchema');

// async function findProduct(parameters){
//     try{
//         const response = await Product.findOne({...parameters});
//         return response;
//     }catch(error){
//         console.log(error);
//     }
// }

async function createProduct(productDetails){
    try{
        const response = await Product.create(productDetails);
        return response;
    }catch(error){
        conssole.log(error);
    }
}

module.exports = {
    // findProduct,
    createProduct
}