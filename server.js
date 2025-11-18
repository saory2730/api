const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); // <- AQUÍ CONECTAS LA API

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API
app.use('/api', routes);

// Frontend
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
