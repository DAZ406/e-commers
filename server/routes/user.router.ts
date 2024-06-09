import express from 'express';
import { authenticateHandler, addNewUserHandler, deleteUserHandler } from '../controllers/user.controller';
import { verifyToken } from '../Middlewares/athenticateMiddleWare'


const router = express.Router();

router.post("/", authenticateHandler);

router.post("/sighnup", addNewUserHandler);

router.delete("/delete-user", verifyToken, (req, res, next) => {
    deleteUserHandler(req, res, next)
});

export default router;
