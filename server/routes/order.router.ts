import express from 'express';
import { getOrdersByUserIdHandler, addNewOrderHandler, updateStatuseHandler } from '../controllers/order.controller'
import { verifyToken } from '../Middlewares/athenticateMiddleWare'

const router = express.Router();

router.get("/:user_id", getOrdersByUserIdHandler);
router.post("/new-order", addNewOrderHandler);
router.patch("/:order_id/status", updateStatuseHandler);

export default router;