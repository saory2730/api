const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
