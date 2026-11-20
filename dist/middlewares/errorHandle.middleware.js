"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor en ControlLabs'
    });
};
exports.globalErrorHandler = globalErrorHandler;
