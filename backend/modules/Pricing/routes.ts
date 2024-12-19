import { Router } from "express";
import { PricingController } from "./controller";

const router = Router();
const pricingController = new PricingController();

/**
 * @swagger
 * /pricing/initial-data:
 *   get:
 *     summary: Get initial data for pricing
 *     tags:
 *       - Pricing
 *     responses:
 *       200:
 *         description: Initial data for pricing
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ProfileData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     status:
 *                       type: integer
 *                 InitialData:
 *                   type: object
 *                   properties:
 *                     Categories:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           subCategories:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                     Segments:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                     Brands:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *       404:
 *         description: Unable to fetch initial data
 */
router.get("/initial-data", pricingController.getInitialData);

export default router;
