import express from 'express';
import { getUserByInfoHandler } from '../controllers/user.controller';

const router = express.Router();
router.get("/", getUserByInfoHandler);

export default router;
