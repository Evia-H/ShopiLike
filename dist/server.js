// server.ts
import express from "express";
import bodyParser from "body-parser";
import { productRouter } from "./routes/productRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
// Routes
app.use("/products", productRouter);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
