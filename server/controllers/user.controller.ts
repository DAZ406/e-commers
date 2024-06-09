import { Request, Response, NextFunction } from 'express';
import { authenticate , addNewUser, deleteUser } from '../services/user.service';
import { CustomError } from '../exeptions/custumeExeption';

export const authenticateHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const username = await req.body.username;
    const password = await req.body.password;
    try {
    const token = await authenticate (username, password);

    if(!token) {
        throw new CustomError("there was a problem with the data!");
    }
    res.status(200).json({ token });
    } catch (err) {
        next(err);
    }

};

export const addNewUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      const username = await req.body.username;
      const password = await req.body.password;
      try {
      await addNewUser(username, password);
  
      res.status(200).send('user added successfully');
      } catch (err) {
          next(err);
      }
  
  };

  export const deleteUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      await deleteUser(await req.body.user);
  
      res.status(200).send('user deleted successfully');
      } catch (err) {
          next(err);
      }
  
  };

