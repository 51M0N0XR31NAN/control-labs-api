import { Request, Response } from 'express';

export class EquipmentController {
  public static createEquipment = (req: Request, res: Response): void => {
    // TODO: validar req.body (incluye roomId), llamar al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static getEquipment = (req: Request, res: Response): void => {
    const { roomId } = req.query;
    // TODO: si llega roomId, filtrar por ambiente; si no, devolver todos. Responder 200.
    res.status(501).json({
      success: false,
      message: roomId
        ? `El listado de equipos del ambiente ${roomId} todavía no está implementado.`
        : 'El listado de equipos todavía no está implementado.'
    });
  };

  public static updateEquipmentPartially = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar de req.body solo estadoTecnico o roomId y aplicar el cambio parcial.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}