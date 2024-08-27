const express = require('express');
const path = require('path');

const app = express();

const http = require('http');
const PORT = process.env.PORT || 3000;
const host = '127.0.0.1';

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar la ruta principal para servir la página index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
