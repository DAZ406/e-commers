import express from 'express';
import { getAllProductsHandler, getProductsByNameHandler, decriseProductAmountHandler } from '../controllers/product.controller'

const router = express.Router();

router.get("/", getAllProductsHandler);

router.get("/:name", getProductsByNameHandler);

router.patch("/:id", decriseProductAmountHandler);

export default router;