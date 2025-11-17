console.log("Hola estoy haciendo una API")

const express = require('express'); //importar el framework express
const app = express(); // crea una aplicacion express
const port = 3000; //puedes usar cualquier ´puerto disponible (3000)


//define una ruta basica  incial para probar el servidor
// Ruta básica para probar
app.get('/', (req, res) => {
    res.send("Servidor funcionando correctamente 👌");
});

app.get('/noticias', (req, res) => {

    const noticias = [
        { id: 1, titulo: "Noticia 1", contenido: "Contenido de la noticia 1" },
        { id: 2, titulo: "Noticia 2", contenido: "Contenido de la noticia 2" },
        { id: 3, titulo: "Noticia 3", contenido: "Contenido de la noticia 3" },
    ];
    res.json(noticias);
});

// Poner a escuchar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});