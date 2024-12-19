import { Request, Response } from "express";
import { ProductService } from "./service";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  // Get Filtered products
  getFilteredProducts = (req: Request, res: Response): void => {
    const { search, category, segment, brand } = req.query;
    const searchStr =
      typeof search === "string"
        ? search
        : Array.isArray(search)
        ? search.join(" ")
        : "";

    const filteredProducts = this.productService.getFilteredProducts(
      searchStr,
      category as string,
      segment as string,
      brand as string
    );

    res.json(filteredProducts);
  };

  // Get product by ID
  getProductById = (req: Request, res: Response): void => {
    const product = this.productService.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  };

  // Add a new product
  addProduct = (req: Request, res: Response): void => {
    const {
      title,
      skuCode,
      brandId,
      categoryId,
      subCategoryId,
      segmentId,
      globalWholesalePrice,
    } = req.body;

    if (
      !title ||
      !skuCode ||
      !brandId ||
      !categoryId ||
      !categoryId ||
      !segmentId ||
      !globalWholesalePrice
    ) {
      res.status(400).json({ error: "All fields are required" });
    } else {
      const newProduct = this.productService.addProduct({
        title,
        skuCode,
        brandId,
        categoryId,
        subCategoryId,
        segmentId,
        globalWholesalePrice,
      });
      res.status(201).json(newProduct);
    }
  };
}
