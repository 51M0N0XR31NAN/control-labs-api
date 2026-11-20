"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentController = void 0;
class IncidentController {
    static createIncident = (req, res) => {
        // TODO: validar req.body (equipmentId o roomId), llamar al servicio y responder 201.
        res.status(501).json({
            success: false,
            message: 'El registro de novedades todavía no está implementado.'
        });
    };
    static getIncidents = (req, res) => {
        // TODO: llamar al servicio y responder 200 con el historial completo de novedades.
        res.status(501).json({
            success: false,
            message: 'La consulta del historial de novedades todavía no está implementada.'
        });
    };
    static updateIncidentPartially = (req, res) => {
        const { id } = req.params;
        // TODO: tomar de req.body el nuevo estado y aplicar el cambio parcial.
        res.status(501).json({
            success: false,
            message: `La actualización parcial de la novedad ${id} todavía no está implementada.`
        });
    };
}
exports.IncidentController = IncidentController;
