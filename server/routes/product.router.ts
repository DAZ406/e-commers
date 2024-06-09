import express from 'express';
import { getAllProductsHandler, getProductsByNameHandler, updateProductAmountHandler } from '../controllers/product.controller'

const router = express.Router();

router.get("/", getAllProductsHandler);

router.get("/:name", getProductsByNameHandler);

router.patch("/:id", updateProductAmountHandler);

export default router;