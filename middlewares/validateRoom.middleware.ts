import { Request, Response, NextFunction } from 'express';
import { ICreateRoomDTO, IUpdateRoomDTO } from '../src/dtos/room.dto';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const validateCreateRoomPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;
  if (!isRecord(body)) {
    res.status(400).json({ success: false, error: 'El cuerpo debe ser un objeto JSON.' });
    return;
  }

  const { capacidad, ubicacion } = body;
  if (!Number.isInteger(capacidad) || (capacidad as number) <= 0) {
    res.status(400).json({
      success: false,
      error: 'capacidad es obligatoria y debe ser un entero positivo.'
    });
    return;
  }

  if (typeof ubicacion !== 'string' || ubicacion.trim() === '') {
    res.status(400).json({
      success: false,
      error: 'ubicacion es obligatoria y debe ser un texto no vacío.'
    });
    return;
  }

  const dto: ICreateRoomDTO = { capacidad: capacidad as number, ubicacion: ubicacion.trim() };
  res.locals.createRoomDTO = dto;
  next();
};

export const validateUpdateRoomPayload = (
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

  const allowedFields = ['capacidad', 'estadoOperativo'];
  const invalidFields = Object.keys(body).filter((field) => !allowedFields.includes(field));
  if (invalidFields.length > 0) {
    res.status(400).json({
      success: false,
      error: `Campos no permitidos: ${invalidFields.join(', ')}.`
    });
    return;
  }

  if (
    'capacidad' in body &&
    (!Number.isInteger(body.capacidad) || (body.capacidad as number) <= 0)
  ) {
    res.status(400).json({
      success: false,
      error: 'capacidad debe ser un entero positivo.'
    });
    return;
  }

  if (
    'estadoOperativo' in body &&
    (typeof body.estadoOperativo !== 'string' || body.estadoOperativo.trim() === '')
  ) {
    res.status(400).json({
      success: false,
      error: 'estadoOperativo debe ser un texto no vacío.'
    });
    return;
  }

  const dto: IUpdateRoomDTO = {
    ...(body.capacidad !== undefined ? { capacidad: body.capacidad as number } : {}),
    ...(typeof body.estadoOperativo === 'string'
      ? { estadoOperativo: body.estadoOperativo.trim() }
      : {})
  };
  res.locals.updateRoomDTO = dto;
  next();
};
