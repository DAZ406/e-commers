import express from 'express';
import { AppDataSource } from './connection/data-source';
import { erorrHandler, errorLogger } from './Middlewares/errorHandler';
import { loggerMiddleware } from './Middlewares/loggerMiddleware';
import userRouter from "./routes/user.router"
import productRouter from './routes/product.router'
import orderRouter from './routes/order.router';
import orderedProdRouter from './routes/ordered_prods.router';
const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(loggerMiddleware);
    app.use('/users', userRouter);
    app.use('/products', productRouter);
    app.use('/orders', orderRouter);
    app.use('/ordered-products', orderedProdRouter);
    app.use(errorLogger);
    app.use(erorrHandler);

    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
