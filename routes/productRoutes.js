import express from 'express'
import {
    createProductController, updateProductController,
    getProductController, getSingleProductController,
    productPhotoController, deleteProductController,
    productFiltersController, productCountController,
    productListController,
    braintreeTokenController,
    brainTreePaymentController
} from '../controllers/productController.js';

const router = express.Router()
import formidable from "express-formidable";
router.post(
    "/create-product", formidable(), createProductController);
//routes
router.put("/update-product/:pid", formidable(), updateProductController);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

router.post('/product-filters', productFiltersController)

router.get('/product-count', productCountController)

router.get('/product-list/:page', productListController)

router.get('/braintree/token', braintreeTokenController)

router.post('/braintree/payment', brainTreePaymentController)

export default router
