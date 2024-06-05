// productRoutes.ts
import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

export const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.get("/:id", getProductById);
