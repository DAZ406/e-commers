import { Request, Response, NextFunction } from 'express';
import { getOrdersByUserId, addNewOrder } from '../services/orders.service';
import { CustomError } from '../exeptions/custumeExeption';

export const getOrdersByUserIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
    const id = await parseInt(req.params.user_id);
    const orders = await getOrdersByUserId(id);

    if(orders.length === 0) {
        throw new CustomError("you dont have any orders");
    }
    res.status(200).send(orders);
    } catch (err) {
        next(err);
    }
};

export const addNewOrderHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      const orderId = await addNewOrder(await req.body.user);

      res.status(200).send(orderId);
      } catch (err) {
          next(err);
      }
  };
