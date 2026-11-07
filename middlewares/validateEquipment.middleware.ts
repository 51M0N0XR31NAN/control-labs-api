import { Request, Response, NextFunction } from 'express';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const validateCreateEquipmentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isRecord(body)) {
    res.status(400).json({
      success: false,
      error: 'El cuerpo debe ser un objeto JSON.'
    });
    return;
  }

  if (!Number.isInteger(body.roomId) || (body.roomId as number) <= 0) {
    res.status(400).json({
      success: false,
      error: 'roomId es obligatorio y debe ser un entero positivo.'
    });
    return;
  }

  next();
};

export const validateUpdateEquipmentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isRecord(body) || Object.keys(body).length === 0) {
    res.status(400).json({
      success: false,
      error: 'El cuerpo debe contener al menos un campo para actualizar.'
    });
    return;
  }

  const allowedFields = ['estadoTecnico', 'roomId'];
  const invalidFields = Object.keys(body).filter(
    (field) => !allowedFields.includes(field)
  );

  if (invalidFields.length > 0) {
    res.status(400).json({
      success: false,
      error: `Campos no permitidos: ${invalidFields.join(', ')}.`
    });
    return;
  }

  if (
    'estadoTecnico' in body &&
    (typeof body.estadoTecnico !== 'string' || body.estadoTecnico.trim() === '')
  ) {
    res.status(400).json({
      success: false,
      error: 'estadoTecnico debe ser un texto no vacío.'
    });
    return;
  }

  if (
    'roomId' in body &&
    (!Number.isInteger(body.roomId) || (body.roomId as number) <= 0)
  ) {
    res.status(400).json({
      success: false,
      error: 'roomId debe ser un entero positivo.'
    });
    return;
  }

  next();
};