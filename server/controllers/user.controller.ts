import { Request, Response, NextFunction } from 'express';
import { authenticate , addNewUser, deleteUser, updateUser } from '../services/user.service';
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
        throw new CustomError("there was a problem with the data!", 400);
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

  export const updateUserrHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      const newTocken = await updateUser(await req.body.user, await req.body.newUsername, await req.body.newPassword);
  
      res.status(200).send(newTocken);
      } catch (err) {
          next(err);
      }
  
  };

  export const getTheUserByTokenHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
      const user = await req.body;
      res.status(200).send(user);
      } catch (err) {
          next(err);
      }
  
  };


