import { AppDataSource } from '../connection/data-source';
import { User } from '../entities/User.entity';
import { CustomError } from '../exeptions/custumeExeption';
import * as jwt from 'jsonwebtoken';

const userRepository = AppDataSource.getRepository(User);

const key =  process.env.JWT_SECRET || 'zelianodzevo';

export const getUserById = async (id: number): Promise<User> => {
    if(!id) {
        throw new CustomError("you forgot to put an id!");
    }
    
    const user = await userRepository.findOne({ where: { id: id } });

    if(!user) {
        throw new CustomError("no such user exicts");
    }

    return user;
};


export const authenticate  = async (username: string, password: string): Promise<string  | null> => {
    if((!username) || (!password)) {
        throw new CustomError("One of the fileds is missing! please check that you wrote your username and password");
    }
    const user = await userRepository.findOne({ where: { username: username, password: password } });

    if(!user) {
        return null
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, password: user.password },
        key,
        { expiresIn: '1h' } // Token expires in 1 hour
    );
    return token;
};

export const addNewUser = async (username: string, password: string): Promise<Object> => {
    if((!username) || (!password)) {
        throw new CustomError("One of the fileds is missing! please check that you wrote your username and password");
    }
    const newUser = {username: username, password: password};

    return userRepository.insert(newUser);
};
