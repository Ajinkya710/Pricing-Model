import { SwaggerOptions } from "swagger-ui-express";

const swaggerOptions: SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "API for managing products in categories and subcategories",
      contact: {
        name: "Your Name",
        email: "your.email@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Development Server",
      },
    ],
    components: {
      schemas: {
        Product: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "1",
              description: "Unique identifier for the product",
            },
            title: {
              type: "string",
              example: "High Garden Pinot Noir 2021",
              description: "The title of the product",
            },
            skuCode: {
              type: "string",
              example: "HGVPIN216",
              description: "Stock Keeping Unit code",
            },
            brand: {
              type: "string",
              example: "High Garden",
              description: "Brand of the product",
            },
            categoryId: {
              type: "string",
              example: "1",
              description: "Category ID the product belongs to",
            },
            subCategoryId: {
              type: "string",
              example: "1",
              description: "Sub-category ID the product belongs to",
            },
            segment: {
              type: "string",
              example: "Red",
              description: "Product segment (e.g., Red, Sparkling)",
            },
            globalWholesalePrice: {
              type: "number",
              example: 279.06,
              description: "Global wholesale price",
            },
          },
        },
        ProductInput: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "High Garden Pinot Noir 2021",
              description: "The title of the product",
            },
            skuCode: {
              type: "string",
              example: "HGVPIN216",
              description: "Stock Keeping Unit code",
            },
            brand: {
              type: "string",
              example: "High Garden",
              description: "Brand of the product",
            },
            categoryId: {
              type: "string",
              example: "1",
              description: "Category ID the product belongs to",
            },
            subCategoryId: {
              type: "string",
              example: "1",
              description: "Sub-category ID the product belongs to",
            },
            segment: {
              type: "string",
              example: "Red",
              description: "Product segment (e.g., Red, Sparkling)",
            },
            globalWholesalePrice: {
              type: "number",
              example: 279.06,
              description: "Global wholesale price",
            },
          },
        },
      },
    },
  },
  apis: ["./modules/Pricing/*.ts", "./modules/Products/*.ts"], // Ensure this points to the correct path for your API routes
};

export default swaggerOptions;
