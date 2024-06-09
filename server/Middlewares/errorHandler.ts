import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { CustomError } from '../exeptions/custumeExeption'

export const errorLogger = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  next(error);
};

export const erorrHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if(!error.status) {
    res.status(500).send(error.message);
  }
  res.status(error.status).send(error.message);
  next(error);
};
