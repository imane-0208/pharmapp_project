import express from 'express';
import controller from '../controllers/user';
import extractJwt from '../middleware/extractJWT';


const router = express.Router();

//User Routes
router.get('/validate', extractJwt, controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllUsers);

export = router;
