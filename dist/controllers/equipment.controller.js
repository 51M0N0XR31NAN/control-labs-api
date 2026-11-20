"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentController = void 0;
class EquipmentController {
    static createEquipment = (req, res) => {
        // TODO: validar req.body (incluye roomId), llamar al servicio y responder 201.
        res.status(501).json({
            success: false,
            message: 'El registro de equipos todavía no está implementado.'
        });
    };
    static getEquipment = (req, res) => {
        const { roomId } = req.query;
        // TODO: si llega roomId, filtrar por ambiente; si no, devolver todos. Responder 200.
        res.status(501).json({
            success: false,
            message: roomId
                ? `El listado de equipos del ambiente ${roomId} todavía no está implementado.`
                : 'El listado de equipos todavía no está implementado.'
        });
    };
    static updateEquipmentPartially = (req, res) => {
        const { id } = req.params;
        // TODO: tomar de req.body solo estadoTecnico o roomId y aplicar el cambio parcial.
        res.status(501).json({
            success: false,
            message: `La actualización parcial del equipo ${id} todavía no está implementada.`
        });
    };
}
exports.EquipmentController = EquipmentController;
