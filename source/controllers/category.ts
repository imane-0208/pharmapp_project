import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import mongoose from 'mongoose';
import Category from '../models/category';


const NAMESPACES = 'Category';

//get all categories
const getAllCategories = (req: Request, res: Response, next: NextFunction) => {
    Category.find()
        .then((categories) => {
            return res.status(200).json({
                categories
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


//add category
const addCategory = (req: Request, res: Response, next: NextFunction) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description
    });
    category
        .save()
        .then((result) => {
            return res.status(201).json({
                message: 'Category added successfully',
                createdCategory: {
                    _id: result._id,
                    name: result.name,
                    description: result.description
                }
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
}

//get one category
const getOneCategory = (req: Request, res: Response, next: NextFunction) => {
    Category.findById(req.params.id)
        .then((category) => {
            if (!category) {
                return res.status(404).json({
                    message: 'Category not found'
                });
            }
            return res.status(200).json({
                category
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
}


export default {addCategory, getAllCategories, getOneCategory};


