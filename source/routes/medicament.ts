import express from 'express';
import controller from '../controllers/medicament';



const router = express.Router();


//medicament Routes
router.get('/get/all', controller.getAllMedicaments);
router.post('/addMedicament', controller.addMedicament);
router.get('/get/oneMedicament/:id', controller.getOneMedicament);







export = router;
