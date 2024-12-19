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
        Product: {},
        ProductInput: {},
        Pricing: {},
        Profile: {},
      },
    },
  },
  apis: [
    "./modules/Pricing/*.ts",
    "./modules/Products/*.ts",
    "./modules/Profile/*.ts",
  ], // Ensure this points to the correct path for your API routes
};

export default swaggerOptions;
