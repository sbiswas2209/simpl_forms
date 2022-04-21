import { Router } from 'express';
import formRouter from './forms/router';
export default (): Router => {
  const app = Router();

  app.use("/forms", formRouter)

  return app;
};
