import { Column, Entity, OneToMany, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany } from 'typeorm';
import { Order } from './Order.entity';


@Entity({name: 'products'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'price'})
  price: number;

  @Column({name: 'amount'})
  amount: number;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];
}
