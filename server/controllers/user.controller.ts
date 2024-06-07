import { Request, Response, NextFunction } from 'express';
import { getUserByInfo, addNewUser } from '../services/user.service';
import { CustomError } from '../exeptions/custumeExeption';

export const getUserByInfoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const username = await req.body.username;
    const password = await req.body.password;
    try {
    const answer = await getUserByInfo(username, password);

    if(!answer) {
        throw new CustomError("there was a problem with the data!");
    }
    res.status(200).send(`${answer.id}`);
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
