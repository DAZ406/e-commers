import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ordered_Prod } from './Orderd_Prod.entity';


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

  @OneToMany(() => Ordered_Prod, (ordered_prod) => ordered_prod.product)
  prods_soled: Ordered_Prod[];
}
