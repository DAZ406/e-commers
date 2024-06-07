import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order.entity';
import { Product } from './Product.entity';

@Entity({name: 'ordered_prod'})
export class Ordered_Prod {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'purchased_amount'})
  purchased_amount: number;

  @ManyToOne(() => Order, (order) => order.ordered_prods)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.prods_soled)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
