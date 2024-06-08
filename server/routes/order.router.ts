import express from 'express';
import { getOrdersByUserIdHandler } from '../controllers/order.controller'

const router = express.Router();

router.get("/:user_id", getOrdersByUserIdHandler);

export default router;