import { Request, Response, NextFunction } from 'express';
import { addNewOrderedProd, getProdsInOrder } from '../services/ordered_prod.service';
import { CustomError } from '../exeptions/custumeExeption';
import { Product } from '../entities/Product.entity';

export const getProdsInOrderHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      const orderedProds = await getProdsInOrder(parseInt(await req.params.order_id));
      const prods: any[] = [];

       orderedProds.forEach((ordprod)  => {
       prods.push({product: ordprod.product, purchased_amount: ordprod.purchased_amount});
      });
  
      
      res.status(200).send(prods);
      } catch (err) {
          next(err);
      }
  };