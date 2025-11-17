const express = require('express');
const path = require('path');
const app = express();

// Middleware para leer JSON del frontend
app.use(express.json());

// Servir la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
