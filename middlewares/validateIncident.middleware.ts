import { Request, Response, NextFunction } from 'express';
import { ICreateIncidentDTO, IUpdateIncidentDTO } from '../src/dtos/incident.dto';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const validateCreateIncidentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;
  if (!isRecord(body)) {
    res.status(400).json({ success: false, error: 'El cuerpo debe ser un objeto JSON.' });
    return;
  }

  const hasEquipmentId = Object.prototype.hasOwnProperty.call(body, 'equipmentId');
  const hasRoomId = Object.prototype.hasOwnProperty.call(body, 'roomId');
  if (hasEquipmentId === hasRoomId) {
    res.status(400).json({
      success: false,
      error: 'Debe indicar exactamente uno de estos campos: equipmentId o roomId.'
    });
    return;
  }

  const targetId = (hasEquipmentId ? body.equipmentId : body.roomId) as number;
  if (!Number.isInteger(targetId) || targetId <= 0) {
    res.status(400).json({
      success: false,
      error: 'El identificador del equipo o ambiente debe ser un entero positivo.'
    });
    return;
  }

  const dto: ICreateIncidentDTO = hasEquipmentId
    ? { equipmentId: targetId }
    : { roomId: targetId };
  res.locals.createIncidentDTO = dto;
  next();
};

export const validateUpdateIncidentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;
  if (!isRecord(body) || Object.keys(body).length !== 1 || !Object.prototype.hasOwnProperty.call(body, 'estado')) {
    res.status(400).json({
      success: false,
      error: 'El cuerpo debe contener únicamente el campo estado.'
    });
    return;
  }

  if (typeof body.estado !== 'string' || body.estado.trim() === '') {
    res.status(400).json({
      success: false,
      error: 'El estado debe ser un texto no vacío.'
    });
    return;
  }

  const dto: IUpdateIncidentDTO = { estado: body.estado.trim() };
  res.locals.updateIncidentDTO = dto;
  next();
};