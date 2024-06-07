import express from 'express';
import { getUserByInfoHandler, addNewUserHandler } from '../controllers/user.controller';

const router = express.Router();

router.get("/", getUserByInfoHandler);

router.post("/sighnup", addNewUserHandler);

export default router;
