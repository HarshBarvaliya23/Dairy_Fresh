import express, { Router } from 'express'
const router = express.Router();
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'
import { createCategoryController, updateCategoryController, getCategoryController, singleCategoryController, deleteCategoryCOntroller } from './../controllers/categoryController.js'



router.post('/create-category', createCategoryController)
router.put('/update-category/:id', updateCategoryController)
router.get('/get-category', getCategoryController)
router.get('/single-category/:slug', singleCategoryController)
router.delete(
    "/delete-category/:id",
    deleteCategoryCOntroller
);

export default router