"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
class DashboardController {
    static getSummary = (req, res) => {
        // TODO: pedir al servicio los cuatro contadores y responder 200 con el resumen.
        res.status(501).json({
            success: false,
            message: 'El resumen del dashboard todavía no está implementado.'
        });
    };
}
exports.DashboardController = DashboardController;
