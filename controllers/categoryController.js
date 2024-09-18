import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: "Name is required" })
        }
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category already exist",
                category
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: "New Category created",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in category"
        })
    }
}

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(200).send({
            success: true,
            message: "Category Updated Successfully",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "error while updating category"
        })
    }
}

export const getCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All Category",
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "While getting all category"
        })
    }
}

export const singleCategoryController = async (req, res) => {
    try {

        const category = await categoryModel.findOne({ slug: req.params.slug })
        res.status(200).send({
            success: true,
            message: "Sigle cat successfully",
            category
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "While getting single category"
        })
    }
}

export const deleteCategoryCOntroller = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Categry Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting category",
            error,
        });
    }
};