const { createProduct, getProductById, deleteProductById } = require("../services/productService");

async function findProduct(req,res){
    try{
        const productId=req.params.id;
        const product = await getProductById(productId);
        return res.status(200).json({
            success: true,
            data : product,
            message : "Successfully found the product",
            error : {}
        });
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : true,
            data : {},
            message : error.reason,
            error : error
        });
    }
}

async function deleteProduct(req,res){
    try{
        const productId=req.params.id;
        const product = await deleteProductById(productId);
        return res.status(200).json({
            success: true,
            data : product,
            message : "Successfully deleted the product",
            error : {}
        });
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : true,
            data : {},
            message : error.reason,
            error : error
        });
    }
}

async function addProduct(req,res){
    try{
        const product = await createProduct({
            productName : req.body.productName,
            description : req.body.description,
            imagePath : req.file.path,
            price : req.body.price,
            category : req.body.category, // if category is undefined , veg will be stored
            inStock : req.body.inStock // if inStock is umdefined, true will be stored
        });
        return res.status(201).json({
            success : true,
            message : 'Successfully created the product',
            error : {},
            data : product
        });
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : false,
            message : error.reason,
            data :{},
            error : error
        });
    }
}

module.exports ={
    findProduct,
    deleteProduct,
    addProduct
}
