"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserUpdatePayload = exports.validateCreateUserPayload = void 0;
const isNonEmptyObject = (value) => typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0;
const validateCreateUserPayload = (req, res, next) => {
    if (!isNonEmptyObject(req.body)) {
        res.status(400).json({
            success: false,
            error: 'El cuerpo debe ser un objeto JSON no vacío.'
        });
        return;
    }
    next();
};
exports.validateCreateUserPayload = validateCreateUserPayload;
const editableFields = ['rol', 'estado', 'contraseña'];
const validateUserUpdatePayload = (req, res, next) => {
    if (!isNonEmptyObject(req.body)) {
        res.status(400).json({
            success: false,
            error: 'El cuerpo debe contener al menos un campo para actualizar.'
        });
        return;
    }
    const invalidFields = Object.keys(req.body).filter((field) => !editableFields.includes(field));
    if (invalidFields.length > 0) {
        res.status(400).json({
            success: false,
            error: `Campos no permitidos: ${invalidFields.join(', ')}.`
        });
        return;
    }
    const hasInvalidValue = Object.values(req.body).some((value) => typeof value !== 'string' || value.trim() === '');
    if (hasInvalidValue) {
        res.status(400).json({
            success: false,
            error: 'Los campos rol, estado y contraseña deben ser textos no vacíos.'
        });
        return;
    }
    next();
};
exports.validateUserUpdatePayload = validateUserUpdatePayload;
