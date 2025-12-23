const express = require('express');
const { addProduct, findProduct, deleteProduct } = require('../controllers/productController');
const uploader = require('../middlewares/multerMiddleware');
const { isLoggedIn, isAdmin } = require('../validation/authValidator');

const productRouter=express.Router();

productRouter.post(
    '/', 
    isLoggedIn, 
    isAdmin, 
    uploader.single('productImage'), 
    addProduct
);
productRouter.get('/:id',findProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;