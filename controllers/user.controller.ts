import { Request, Response } from 'express';

export class UserController {
  public static getUsers = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder 200 con el listado de usuarios activos.
    res.status(501).json({
      success: false,
      message: 'El listado de usuarios todavía no está implementado.'
    });
  };

  public static createUser = (req: Request, res: Response): void => {
    // TODO: validar req.body, llamar al servicio y responder 201 con el usuario creado.
    res.status(501).json({
      success: false,
      message: 'El registro de usuarios todavía no está implementado.'
    });
  };

  public static getUserById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id al servicio y responder con el usuario encontrado (404 si no existe).
    res.status(501).json({
      success: false,
      message: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  public static updateUserPartially = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar de req.body solo rol, estado o contraseña y aplicar el cambio parcial.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del usuario ${id} todavía no está implementada.`
    });
  };

  public static deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: marcar el usuario como eliminado (borrado lógico) y responder 204.
    res.status(501).json({
      success: false,
      message: `La eliminación del usuario ${id} todavía no está implementada.`
    });
  };
}