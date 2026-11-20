"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // Forma recomendada en TS para reemplazar require('dotenv').config()
const app_1 = __importDefault(require("./src/app"));
const express_1 = require("express");
const PORT = process.env.PORT || 5000;
app_1.default.listen(PORT, () => {
    console.log(`🚀 Servidor ControlLabs corriendo en http://localhost:${PORT}`);
});
// 1. Importar y crear router
const router = (0, express_1.Router)();
// 2. Definir endpoints
router.get('/saludo', (req, res) => {
    res.send('Hola SENA ADSO');
});
exports.default = router;
