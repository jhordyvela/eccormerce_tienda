import express from "express";
import { createProducto, getProducto, getProductos } from "../controllers/productosController.js";

const router = express.Router();

router.get("/productos", getProductos);
router.get("/productos/:id", getProducto);
router.post("/productos", createProducto);


export default router;