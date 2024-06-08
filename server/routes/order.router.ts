import express from 'express';
import { getOrdersByUserIdHandler, addNewOrderHandler } from '../controllers/order.controller'

const router = express.Router();

router.get("/:user_id", getOrdersByUserIdHandler);
router.post("/new-order", addNewOrderHandler);

export default router;