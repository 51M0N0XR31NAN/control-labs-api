import { Request, Response, NextFunction } from 'express';

const isNonEmptyObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.keys(value).length > 0;

export const validateCreateUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!isNonEmptyObject(req.body)) {
    res.status(400).json({
      success: false,
      error: 'El cuerpo debe ser un objeto JSON no vacío.'
    });
    return;
  }

  next();
};

const editableFields = ['rol', 'estado', 'contraseña'];

export const validateUserUpdatePayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!isNonEmptyObject(req.body)) {
    res.status(400).json({
      success: false,
      error: 'El cuerpo debe contener al menos un campo para actualizar.'
    });
    return;
  }

  const invalidFields = Object.keys(req.body).filter(
    (field) => !editableFields.includes(field)
  );

  if (invalidFields.length > 0) {
    res.status(400).json({
      success: false,
      error: `Campos no permitidos: ${invalidFields.join(', ')}.`
    });
    return;
  }

  const hasInvalidValue = Object.values(req.body).some(
    (value) => typeof value !== 'string' || value.trim() === ''
  );

  if (hasInvalidValue) {
    res.status(400).json({
      success: false,
      error: 'Los campos rol, estado y contraseña deben ser textos no vacíos.'
    });
    return;
  }

  next();
};