const express = require("express");
const makeFilter = require("./filtros/validaciones");
const productos = require("../data/productos.json");
const app = express();

app.use(express.json());

app.post("/productos/filtrar", (req, res) => {
  const filtros = req.body.map(makeFilter);
  res.status(201).json(productos.filter((p) => filtros.every((f) => f(p))));
});

app.listen(3000, () => {
  console.log("App de filtros iniciada correctamente.!");
});
