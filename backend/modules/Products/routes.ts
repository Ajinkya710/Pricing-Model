import { Router } from "express";
import { ProductController } from "./controller";

const router = Router();
const productController = new ProductController();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get products with optional filters
 *     tags:
 *       - Products
 *     parameters:
 *       - name: search
 *         in: query
 *         description: Search term for product title or SKU
 *         required: false
 *         schema:
 *           type: string
 *       - name: category
 *         in: query
 *         description: Category filter for products
 *         required: false
 *         schema:
 *           type: string
 *       - name: segment
 *         in: query
 *         description: Segment filter for products (e.g., Red, White)
 *         required: false
 *         schema:
 *           type: string
 *       - name: brand
 *         in: query
 *         description: Brand filter for products
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of filtered products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", productController.getFilteredProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get("/:id", productController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request
 */
router.post("/", productController.addProduct);

export default router;
