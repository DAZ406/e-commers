import { Request, Response, NextFunction } from 'express';
import { getOrdersByUserId, addNewOrder, updateStatuse } from '../services/orders.service';
import { CustomError } from '../exeptions/custumeExeption';

export const getOrdersByUserIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
    const id =  parseInt(req.params.user_id);
    const orders = await getOrdersByUserId(id);
    
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

  export const updateStatuseHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
       await updateStatuse(parseInt(req.params.order_id), await req.body.status);

      res.status(200).send(`status of order ${parseInt(req.params.order_id)} was updated`);
      } catch (err) {
          next(err);
      }
  };

  


