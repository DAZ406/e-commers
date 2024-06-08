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

export const decriseProductAmount = async (amount: number, id: number): Promise<void> => {
    const productToUpdate = await productRepository.findOne({ where: { id: id } });

    if(!productToUpdate) {
        throw new CustomError("no such product exist");
    }

    productToUpdate.amount = productToUpdate.amount - amount;

    await productRepository.save(productToUpdate);

}


