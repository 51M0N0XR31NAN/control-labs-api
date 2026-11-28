import { Request, Response } from 'express';

export class DashboardController {
  public static getSummary = (req: Request, res: Response): void => {
    // TODO: pedir al servicio los cuatro contadores y responder 200 con el resumen.
    res.status(501).json({
      success: false,
      message: 'El resumen del dashboard todavía no está implementado.'
    });
  };
}