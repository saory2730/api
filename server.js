const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", routes);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
