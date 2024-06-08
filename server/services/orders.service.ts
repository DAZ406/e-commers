import { AppDataSource } from '../connection/data-source';
import { Order } from '../entities/Order.entity';
import { CustomError } from '../exeptions/custumeExeption';
import { getUserById } from '../services/user.service';

const orderRepository = AppDataSource.getRepository(Order);

export const getOrdersById = async (id: number): Promise<Order> => {
    if(!id) {
        throw new CustomError("you forgot to put an id!");
    }
    
    const order = await orderRepository.findOne({ where: { id: id } });

    if(!order) {
        throw new CustomError("no such user exicts");
    }

    return order;
};

export const getOrdersByUserId = async (id: number): Promise<Order[]> => {

    return await orderRepository.createQueryBuilder("order")
    .leftJoin("order.buyer", "user")
    .where("user.id = :id", { id: id })
    .getMany()
}

export const addNewOrder = async (newOrder: any): Promise<Partial<Order>> => {
    const order_user = await getUserById(newOrder.user_id);
    const newOrdered = {
        status: newOrder.status,
        date: newOrder.date,
        buyer: order_user
    };
    await orderRepository.insert(newOrdered);

    return newOrdered;
}