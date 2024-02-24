const express = require ("express");
const app = express();
const PUERTO = 8080;
const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");

//LE DIGO A EXPRESS QUE RECIBO ARCHIVOS EN FORMATO JSON.
app.use(express.json());

//RUTAS
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

//LISTEN DEL SERVIDOR
app.listen (PUERTO, () => {
    console.log (`Escuchando en el puerto: ${PUERTO}`);
})