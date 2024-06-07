import { AppDataSource } from '../connection/data-source';
import { User } from '../entities/User.entity';
import { CustomError } from '../exeptions/custumeExeption';

const userRepository = AppDataSource.getRepository(User);

export const getUserByInfo = async (username: string, password: string): Promise<User | null> => {
    if((!username) || (!password)) {
        throw new CustomError("One of the fileds is missing! please check that you wrote your username and password");
    }
    const user = await userRepository.findOne({ where: { username: username, password: password } });

    return user;
};
