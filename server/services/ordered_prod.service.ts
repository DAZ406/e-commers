import { AppDataSource } from '../connection/data-source';
import { Product } from '../entities/Product.entity';
import { Order } from '../entities/Order.entity';
import { getOrdersById } from './orders.service';
import { getProductById } from './products.service';
import { Ordered_Prod } from '../entities/Orderd_Prod.entity';
import { CustomError } from '../exeptions/custumeExeption';

const orderedProdRepository = AppDataSource.getRepository(Ordered_Prod);

export const addNewOrderedProd = async (newOrderedProd: any): Promise<void> => {
    const prod = await getProductById(newOrderedProd.product_id);
    const order = await getOrdersById(newOrderedProd.order_id);
    const orderedProd = {
        purchased_amount: newOrderedProd.purchased_amount,
        order: order,
        product: prod
    };
    await orderedProdRepository.insert(orderedProd);
}