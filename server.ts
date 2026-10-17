import 'dotenv/config'; // Forma recomendada en TS para reemplazar require('dotenv').config()
import app from './src/app';
import { Router } from 'express';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor ControlLabs corriendo en http://localhost:${PORT}`);
});
// 1. Importar y crear router

const router = Router();

// 2. Definir endpoints

router.get('/saludo', (req, res) => {

  res.send('Hola SENA ADSO');

});

export default router;