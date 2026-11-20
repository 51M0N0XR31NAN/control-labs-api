"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateRoomPayload = exports.validateCreateRoomPayload = void 0;
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const validateCreateRoomPayload = (req, res, next) => {
    const body = req.body;
    if (!isRecord(body)) {
        res.status(400).json({ success: false, error: 'El cuerpo debe ser un objeto JSON.' });
        return;
    }
    const { capacidad, ubicacion } = body;
    if (!Number.isInteger(capacidad) || capacidad <= 0) {
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
    const dto = { capacidad: capacidad, ubicacion: ubicacion.trim() };
    res.locals.createRoomDTO = dto;
    next();
};
exports.validateCreateRoomPayload = validateCreateRoomPayload;
const validateUpdateRoomPayload = (req, res, next) => {
    const body = req.body;
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
    if ('capacidad' in body &&
        (!Number.isInteger(body.capacidad) || body.capacidad <= 0)) {
        res.status(400).json({
            success: false,
            error: 'capacidad debe ser un entero positivo.'
        });
        return;
    }
    if ('estadoOperativo' in body &&
        (typeof body.estadoOperativo !== 'string' || body.estadoOperativo.trim() === '')) {
        res.status(400).json({
            success: false,
            error: 'estadoOperativo debe ser un texto no vacío.'
        });
        return;
    }
    const dto = {
        ...(body.capacidad !== undefined ? { capacidad: body.capacidad } : {}),
        ...(typeof body.estadoOperativo === 'string'
            ? { estadoOperativo: body.estadoOperativo.trim() }
            : {})
    };
    res.locals.updateRoomDTO = dto;
    next();
};
exports.validateUpdateRoomPayload = validateUpdateRoomPayload;
