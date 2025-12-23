const express = require('express');
const { addProduct, findProduct, deleteProduct } = require('../controllers/productController');
const uploader = require('../middlewares/multerMiddleware');

const productRouter=express.Router();

productRouter.post('/',uploader.single('productImage'), addProduct);
productRouter.get('/:id',findProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;