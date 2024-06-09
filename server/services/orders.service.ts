import { AppDataSource } from '../connection/data-source';
import { Order } from '../entities/Order.entity';
import { User } from '../entities/User.entity';
import { CustomError } from '../exeptions/custumeExeption';

const orderRepository = AppDataSource.getRepository(Order);

export const getOrdersById = async (id: number): Promise<Order> => {
    if(!id) {
        throw new CustomError("you forgot to put an id!", 400);
    }
    
    const order = await orderRepository.findOne({ where: { id: id } });

    if(!order) {
        throw new CustomError("no such order exicts", 404);
    }

    return order;
};

export const getOrdersByUserId = async (id: number): Promise<Order[]> => {

    return await orderRepository.createQueryBuilder("order")
    .leftJoin("order.buyer", "user")
    .where("user.id = :id", { id: id })
    .getMany()
}

export const addNewOrder = async (user: User): Promise<Partial<Order>> => {
    const newOrdered = {
        buyer: user
    };
    await orderRepository.insert(newOrdered);

    return newOrdered;
}