import express from 'express';
import { AppDataSource } from './connection/data-source';
import { erorrHandler, errorLogger } from './Middlewares/errorHandler';
import { loggerMiddleware } from './Middlewares/loggerMiddleware';
const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(loggerMiddleware);
    //app.use(router);
    app.use(errorLogger);
    app.use(erorrHandler);

    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
