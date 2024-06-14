import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../entities/User.entity';

const key =  process.env.JWT_SECRET || 'zelianodzevo';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: 'Token is required!' });
    }

    try {
        const decoded: User = jwt.verify(token, key) as User;
        req.body.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};