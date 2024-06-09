import { AppDataSource } from '../connection/data-source';
import { User } from '../entities/User.entity';
import { CustomError } from '../exeptions/custumeExeption';
import * as jwt from 'jsonwebtoken';

const userRepository = AppDataSource.getRepository(User);

const key =  process.env.JWT_SECRET || 'zelianodzevo';

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
        { expiresIn: '1h' }
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

export const deleteUser = async (user: User): Promise<void> => {
    await  userRepository.delete({ id: user.id });
};

