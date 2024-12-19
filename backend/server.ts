import express, { Application } from "express";
import bodyParser from "body-parser";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import productRoutes from "./modules/Products/routes";
import pricingRoutes from "./modules/Pricing/routes";
import swaggerOptions from "./swagger";
import cors from "cors";

const app: Application = express();
const PORT = 5000;

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/pricing", pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});