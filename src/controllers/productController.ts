// productController.ts
import { Request, Response } from "express";
import { Product } from "../models/productModel";

// Mock data
let products: Product[] = [
  { id: 1, name: "Product 1", price: 10.99, category: "Clothing" },
  { id: 2, name: "Product 2", price: 24.99, category: "Electronics" },
  { id: 3, name: "Product 3", price: 14.99, category: "Books" },
];

// Controller methods
export const getAllProducts = (req: Request, res: Response): void => {
  res.json(products);
};

export const createProduct = (req: Request, res: Response): void => {
  const { name, price, category }: Product = req.body;
  const newProduct: Product = {
    id: products.length + 1,
    name,
    price,
    category,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const getProductById = (req: Request, res: Response): void => {
  const productId: number = parseInt(req.params.id);
  const product: Product | undefined = products.find(
    (product) => product.id === productId
  );
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }
  res.json(product);
};
