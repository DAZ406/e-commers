import express from 'express';
import { getProdsInOrderHandler,  } from '../controllers/ordered_prod.controller'
import { verifyToken } from '../Middlewares/athenticateMiddleWare'

const router = express.Router();

router.get("/order/:order_id", getProdsInOrderHandler);
// router.post("/new-order", verifyToken, (req, res, next) => {
//     addNewOrderHandler(req, res, next)});

export default router;