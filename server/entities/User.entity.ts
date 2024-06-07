import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order.entity';


@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'username'})
  username: String;

  @Column({name: 'password'})
  password: String;

  // @OneToMany(() => Order, (order) => order.buyer)
  // orders: Order[];
}
