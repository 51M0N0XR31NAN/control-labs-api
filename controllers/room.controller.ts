import { Request, Response } from 'express';

export class RoomController {
  public static getRooms = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder 200 con el listado de ambientes.
    res.status(501).json({
      success: false,
      message: 'El listado de ambientes todavía no está implementado.'
    });
  };

  public static createRoom = (req: Request, res: Response): void => {
    // TODO: validar req.body (capacidad y ubicación), llamar al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de ambientes todavía no está implementado.'
    });
  };

  public static updateRoomPartially = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar de req.body solo los campos a cambiar (capacidad o estado operativo).
    res.status(501).json({
      success: false,
      message: `La actualización parcial del ambiente ${id} todavía no está implementada.`
    });
  };
}