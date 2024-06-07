import express from 'express';
import { getAllProductsHandler, getProductsByNameHandler } from '../controllers/product.controller'

const router = express.Router();

router.get("/", getAllProductsHandler);

router.get("/:name", getProductsByNameHandler);

export default router;