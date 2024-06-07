import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});