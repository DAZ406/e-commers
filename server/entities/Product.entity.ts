import { Column, Entity, JoinTable, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Order } from './Order.entity';


@Entity({name: 'products'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'price'})
  price: number;

  // @Column({name: 'amount'})
  // amount: number;

  @ManyToMany(() => Order, (order) => order.products)
  @JoinTable({
    name: 'orders_products',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'order_id',
      referencedColumnName: 'id',
    },
  })
  orders: Order[];
}
