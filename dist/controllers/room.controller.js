"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomController = void 0;
class RoomController {
    static getRooms = (req, res) => {
        // TODO: llamar al servicio y responder 200 con el listado de ambientes.
        res.status(501).json({
            success: false,
            message: 'El listado de ambientes todavía no está implementado.'
        });
    };
    static createRoom = (req, res) => {
        // TODO: validar req.body (capacidad y ubicación), llamar al servicio y responder 201.
        res.status(501).json({
            success: false,
            message: 'El registro de ambientes todavía no está implementado.'
        });
    };
    static updateRoomPartially = (req, res) => {
        const { id } = req.params;
        // TODO: tomar de req.body solo los campos a cambiar (capacidad o estado operativo).
        res.status(501).json({
            success: false,
            message: `La actualización parcial del ambiente ${id} todavía no está implementada.`
        });
    };
}
exports.RoomController = RoomController;
