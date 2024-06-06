import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(
    `${req.hostname}:${req.socket.localPort}${req.path} ${req.method}`
  );
  next();
};