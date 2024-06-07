import { AppDataSource } from '../connection/data-source';
import { Product } from '../entities/Product.entity';
import { CustomError } from '../exeptions/custumeExeption';
import { ILike } from "typeorm";

const productRepository = AppDataSource.getRepository(Product);

export const getAllProducts = async (): Promise<Product[]> => {
   
    return await productRepository.find();
};

export const getProductsByName = async (name: string): Promise<Product[]> => {
   
    return await productRepository.find({ where: { name: ILike(`%${name}%`) } });
};


