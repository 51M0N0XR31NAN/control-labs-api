import { Request, Response } from 'express';

export class IncidentController {
  public static createIncident = (req: Request, res: Response): void => {
    // TODO: validar req.body (equipmentId o roomId), llamar al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de novedades todavía no está implementado.'
    });
  };

  public static getIncidents = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder 200 con el historial completo de novedades.
    res.status(501).json({
      success: false,
      message: 'La consulta del historial de novedades todavía no está implementada.'
    });
  };

  public static updateIncidentPartially = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar de req.body el nuevo estado y aplicar el cambio parcial.
    res.status(501).json({
      success: false,
      message: `La actualización parcial de la novedad ${id} todavía no está implementada.`
    });
  };
}