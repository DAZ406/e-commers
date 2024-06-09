import express from 'express';
import { authenticateHandler, addNewUserHandler } from '../controllers/user.controller';

const router = express.Router();

router.post("/", authenticateHandler);

router.post("/sighnup", addNewUserHandler);

export default router;
