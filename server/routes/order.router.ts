import express from 'express';
import { getOrdersByUserIdHandler, addNewOrderHandler } from '../controllers/order.controller'
import { verifyToken } from '../Middlewares/athenticateMiddleWare'

const router = express.Router();

router.get("/:user_id", getOrdersByUserIdHandler);
router.post("/new-order", verifyToken, (req, res, next) => {
    addNewOrderHandler(req, res, next)});

export default router;