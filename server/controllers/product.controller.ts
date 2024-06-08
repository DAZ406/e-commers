
import { Request, Response, NextFunction } from 'express';
import { getAllProducts, getProductsByName, decriseProductAmount } from '../services/products.service';
import { CustomError } from '../exeptions/custumeExeption';

export const getAllProductsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
    const products = await getAllProducts();

    if(products.length === 0) {
        throw new CustomError("there are no products currenntly. sorry");
    }
    res.status(200).send(products);
    } catch (err) {
        next(err);
    }
};

export const getProductsByNameHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      const name = await req.params.name;
      const products = await getProductsByName(name);
  
      if(products.length === 0) {
          throw new CustomError("there are no products that matches. sorry");
      }
      res.status(200).send(products);
      } catch (err) {
          next(err);
      }
  };

  export const decriseProductAmountHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      const id = await parseInt(req.params.id);
      const amount = await parseInt(req.body.purchased_amount);
      await decriseProductAmount(amount, id);

      res.status(200).send(`product with the id of ${id} was updated`);
      } catch (err) {
          next(err);
      }
  };