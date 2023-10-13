const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Obteniendo la lista de productos");
});

router.post("/", (req, res, next) => {
  res.send("Producto creado");
});

router.get("/:id", (req, res, next) => {
  res.send("Obtener un producto en especifico");
});

router.patch("/:id", (req, res, next) => {
  res.send("Actualizar Producto especifico");
});

router.delete("/:id", (req, res, next) => {
  res.send("Borrar un producto en especifico");
});

module.exports = router;
