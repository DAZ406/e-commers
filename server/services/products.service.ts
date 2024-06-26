import { AppDataSource } from '../connection/data-source';
import { Product } from '../entities/Product.entity';
import { CustomError } from '../exeptions/custumeExeption';
import { ILike } from "typeorm";

const productRepository = AppDataSource.getRepository(Product);

export const getAllProducts = async (): Promise<Product[]> => {
   
    return await productRepository.find();
};

export const getProductById = async (id: number): Promise<Product> => {
    if(!id) {
        throw new CustomError("you forgot to put an id!", 400);
    }
    
    const product = await productRepository.findOne({ where: { id: id } });

    if(!product) {
        throw new CustomError("no such user exicts", 404);
    }

    return product;
};

export const getProductsByName = async (name: string): Promise<Product[]> => {
   
    return await productRepository.find({ where: { name: ILike(`%${name}%`) } });
};

export const updateProductAmount = async (amount: number, id: number): Promise<void> => {
    const productToUpdate = await productRepository.findOne({ where: { id: id } });

    if(!productToUpdate) {
        throw new CustomError("no such product exist", 404);
    }

    if(amount < 0) {
        throw new CustomError("you ordered to much!", 400);
    }

    productToUpdate.amount = amount;

    await productRepository.save(productToUpdate);

}


