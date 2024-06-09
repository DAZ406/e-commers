import express from 'express';
import { getProdsInOrderHandler, addNewOrderedProdHandler } from '../controllers/ordered_prod.controller'
import { verifyToken } from '../Middlewares/athenticateMiddleWare'

const router = express.Router();

router.get("/order/:order_id", getProdsInOrderHandler);

router.post("/new-ordered-product", addNewOrderedProdHandler);

export default router;