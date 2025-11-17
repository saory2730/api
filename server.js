const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("API funcionando correctamente 👌");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
