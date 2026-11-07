import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from '../routes';
import { requestLogger } from '../middlewares/logger.middleware';
import loanRoutes from '../routes/loan.routes';
import { globalErrorHandler } from '../middlewares/errorHandle.middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/api/v1/loans', loanRoutes);
app.use('/api/v1', routes);

// Health Check Endpoint
app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});
app.get('/__test/error', (_req, _res, next) => {
  next(new Error('Error de prueba'));
});
app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada.'})
});
  app.use(globalErrorHandler);

export default app;





