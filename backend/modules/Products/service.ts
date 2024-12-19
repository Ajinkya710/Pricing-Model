import { Product } from "../../entities/products/Product.entity";
import { v4 as uuidv4 } from "uuid";
import { products } from "../../data/products";
import Fuse from "fuse.js";

export class ProductService {
  private productList: Product[];

  constructor() {
    this.productList = products;
  }

  getFilteredProducts(
    search?: string,
    categoryId?: string,
    segmentId?: string,
    brandId?: string
  ): Product[] {
    let filteredProducts = this.productList;

    // Fuzzy Search Logic using Fuse.js
    if (search) {
      const fuse = new Fuse(this.productList, {
        keys: ["title", "skuCode"],
        includeScore: true,
      });
      filteredProducts = fuse
        .search(search.toString())
        .map((result) => result.item);
    }

    if (categoryId) {
      const categoryIdsArray = categoryId.toString().split(",");
      filteredProducts = filteredProducts.filter((product) =>
        categoryIdsArray.includes(product.categoryId)
      );
    }

    if (segmentId) {
      filteredProducts = filteredProducts.filter(
        (product) => product.segmentId === segmentId.toString()
      );
    }

    if (brandId) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brandId === brandId.toString()
      );
    }

    return filteredProducts;
  }

  // Get product by ID
  getProductById(id: string): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

  // Add a new product
  addProduct(productData: Omit<Product, "id" | "isValid">): Product {
    // Create the new product with the correct UUIDs
    const newProduct: Product = { id: uuidv4(), isValid: true, ...productData };
    this.productList.push(newProduct);

    return newProduct;
  }
}
