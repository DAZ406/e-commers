import { Column, Entity, OneToMany, JoinColumn, ManyToOne, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany } from 'typeorm';
import { User } from './User.entity';
import { Product } from './Product.entity';


@Entity({name: 'orders'})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'status'})
  status: string;

  @Column('password')
  password: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  buyer: User;

  
}
