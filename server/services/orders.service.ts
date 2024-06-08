import { AppDataSource } from '../connection/data-source';
import { Order } from '../entities/Order.entity';
import { CustomError } from '../exeptions/custumeExeption';

const orderRepository = AppDataSource.getRepository(Order);

export const getOrdersByUserId = async (id: number): Promise<Order[]> => {

    return await orderRepository.createQueryBuilder("order")
    .leftJoin("order.buyer", "user")
    .where("user.id = :id", { id: id })
    .getMany()
}