// Mock data
let products = [
    { id: 1, name: "Product 1", price: 10.99, category: "Clothing" },
    { id: 2, name: "Product 2", price: 24.99, category: "Electronics" },
    { id: 3, name: "Product 3", price: 14.99, category: "Books" },
];
// Controller methods
export const getAllProducts = (req, res) => {
    res.json(products);
};
export const createProduct = (req, res) => {
    const { name, price, category } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};
export const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((product) => product.id === productId);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.json(product);
};
