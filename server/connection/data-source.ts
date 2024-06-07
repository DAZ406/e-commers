import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User.entity';
import { Order } from '../entities/Order.entity';
import { Product } from '../entities/Product.entity';
import { Ordered_Prod } from '../entities/Orderd_Prod.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [User, Order, Product, Ordered_Prod],
  subscribers: [],
  migrations: [],
});