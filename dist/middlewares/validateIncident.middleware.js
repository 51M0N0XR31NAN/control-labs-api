"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateIncidentPayload = exports.validateCreateIncidentPayload = void 0;
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const validateCreateIncidentPayload = (req, res, next) => {
    const body = req.body;
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
    const targetId = (hasEquipmentId ? body.equipmentId : body.roomId);
    if (!Number.isInteger(targetId) || targetId <= 0) {
        res.status(400).json({
            success: false,
            error: 'El identificador del equipo o ambiente debe ser un entero positivo.'
        });
        return;
    }
    const dto = hasEquipmentId
        ? { equipmentId: targetId }
        : { roomId: targetId };
    res.locals.createIncidentDTO = dto;
    next();
};
exports.validateCreateIncidentPayload = validateCreateIncidentPayload;
const validateUpdateIncidentPayload = (req, res, next) => {
    const body = req.body;
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
    const dto = { estado: body.estado.trim() };
    res.locals.updateIncidentDTO = dto;
    next();
};
exports.validateUpdateIncidentPayload = validateUpdateIncidentPayload;
