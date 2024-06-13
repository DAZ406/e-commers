import express from 'express';
import { authenticateHandler, addNewUserHandler, deleteUserHandler, updateUserrHandler, getTheUserByTokenHandler } from '../controllers/user.controller';
import { verifyToken } from '../Middlewares/athenticateMiddleWare'


const router = express.Router();

router.post("/log-in", authenticateHandler);

router.post("/sign-up", addNewUserHandler);

router.patch("/update", verifyToken, (req, res, next) => {
    updateUserrHandler(req, res, next)
});

router.delete("/delete-user", verifyToken, (req, res, next) => {
    deleteUserHandler(req, res, next)
});

router.get("/authenticate", verifyToken, (req, res, next) => {
    getTheUserByTokenHandler(req, res, next)
});

export default router;
