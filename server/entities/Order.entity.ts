import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from './User.entity';
import { Product } from './Product.entity';


@Entity({name: 'orders'})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'status'})
  status: string;

  // @ManyToOne(() => User, (user) => user.orders)
  // @JoinColumn({ name: 'user_id' })
  // buyer: User;

  @ManyToMany(() => Product, (product) => product.orders) 
  products: Product[];
}
