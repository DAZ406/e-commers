import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';

export const errorLogger = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  next(error);
};

export const erorrHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send(error.message);
  next(error);
};
