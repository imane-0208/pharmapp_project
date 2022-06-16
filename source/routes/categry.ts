import express from 'express';
import controller from '../controllers/category';

const router = express.Router();

router.get('/get/all', controller.getAllCategories);
router.post('/addCategory', controller.addCategory);
router.get('/get/oneCategory/:id', controller.getOneCategory);




