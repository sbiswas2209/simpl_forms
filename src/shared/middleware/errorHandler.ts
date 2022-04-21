import { Request, Response} from 'express';
import ErrorClass from '../types/error';

//Error Handling Middleware
export const errorHandler = (error, req: Request, res: Response): void => {
  const status = error.statusCode || 500;
  const message = error.message || 'Something Wrong Happened';
  res.status(status).json({ success: false, message });
};

//Middleware that handles the request to Not Defined Endpoints
export const lastRoute = (_req: Request, res: Response): void => {
  res.status(404).json({ success: false, message: 'Endpoint Not Found' });
};