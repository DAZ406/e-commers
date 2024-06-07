import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './User.entity';
import { Ordered_Prod } from './Orderd_Prod.entity';


@Entity({name: 'orders'})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'status'})
  status: string;

  @Column({name: 'date'})
  date: Date

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  buyer: User;

  @OneToMany(() => Ordered_Prod, (ordered_prod) => ordered_prod.order)
  ordered_prods: Ordered_Prod[];
}
