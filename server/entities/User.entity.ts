import { Column, Entity, OneToMany, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany } from 'typeorm';
import { Order } from './Order.entity';


@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'username'})
  username: string;

  @Column({name: 'password'})
  password: string;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];
}
