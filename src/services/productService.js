const cloudinary = require('../config/cloudinaryConfig');
const ProductRepository = require('../repositories/productRepository');
const fs = require('fs/promises');
const InternalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/notFoundError');

async function getProductById(productId){
    const product=await ProductRepository.getProductById(productId);
    if(!product){
        // throw{ reason : `Not able to find the product` , statusCode : 404};
        throw new NotFoundError('Product');
    }
    return product;
}

async function deleteProductById(productId){
    // 1. Find if any product is present in db with this or not
    const product = await ProductRepository.findProductById(productId);
    if(!product){
        throw{ reason : 'No product found with this id', statusCode : 404};
    }
    
    const response=await ProductRepository.deleteProductById(productId);
    if(!reesponse){
        // throw{ reason : 'Not able to delete this product', statusCode : 500};
        throw new NotFoundError('Product');
    }
    return response;
}

async function createProduct(productDetails){
    // It will add a new product in database
// 1. We should check if an image is coming to create the product , then we should first upload it on cloudinary
    const imagePath=productDetails.imagePath;
    if(imagePath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            console.log(productImage);
            await fs.unlink(process.cwd() + "/" + imagePath); 
            /* Converts the path into a full absolute path 
            process.cwd() = root folder where Node.js started
            Guarantees Node knows exactly where the file is*/
        }catch(error){
            console.log(error);
            // throw{ reason : 'Not able to create product', statusCode:500};
            throw new InternalServerError();
        }
    }

    // 2. Then use the url from cloudinary and other product details to add product in db 
    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage : productImage 
    });

    // if(!product){
    //     throw{ reason : 'Not able to create product', statusCode:500};
    // }
    console.log(product);

    return product;
}

module.exports = {
    getProductById,
    deleteProductById,
    createProduct
}