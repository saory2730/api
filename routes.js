const express = require("express");
const router = express.Router();
const db = require("./db");

// GET - Obtener todos los productos
router.get("/productos", (req, res) => {
    db.query("SELECT * FROM productos", (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
});

// POST - Crear producto
router.post("/productos", (req, res) => {
    const { nombre, precio } = req.body;

    db.query(
        "INSERT INTO productos (nombre, precio) VALUES (?, ?)",
        [nombre, precio],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ mensaje: "Producto creado", id: result.insertId });
        }
    );
});

// PUT - Actualizar producto
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;

    db.query(
        "UPDATE productos SET nombre = ?, precio = ? WHERE id = ?",
        [nombre, precio, id],
        err => {
            if (err) return res.status(500).json({ error: err });
            res.json({ mensaje: "Producto actualizado" });
        }
    );
});

// DELETE - Eliminar producto
router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM productos WHERE id = ?",
        [id],
        err => {
            if (err) return res.status(500).json({ error: err });
            res.json({ mensaje: "Producto eliminado" });
        }
    );
});

module.exports = router;
