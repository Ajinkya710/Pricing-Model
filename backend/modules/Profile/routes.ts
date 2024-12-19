import { Router } from "express";
import { ProfileController } from "./controller";

const router = Router();
const profileController = new ProfileController();

/**
 * @swagger
 * /profile/{id}:
 *   get:
 *     summary: Get initial data for pricing
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Profile ID to fetch data for
 *         schema:
 *           type: string
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
 *                       description: Unique ID of the profile
 *                     name:
 *                       type: string
 *                       description: Name of the profile
 *                     expDate:
 *                       type: string
 *                       format: date-time
 *                       description: Expiration date of the profile
 *                     status:
 *                       type: integer
 *                       description: Status of the profile
 *                     isValid:
 *                       type: boolean
 *                       description: Indicates if the profile is valid
 *                 PricingDetails:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique ID of the pricing detail
 *                       productId:
 *                         type: string
 *                         description: Product ID linked to the pricing detail
 *                       profileId:
 *                         type: string
 *                         description: Profile ID associated with the pricing detail
 *                       amount:
 *                         type: number
 *                         format: float
 *                         description: Original pricing amount
 *                       adjustment:
 *                         type: number
 *                         format: float
 *                         description: Adjusted value
 *                       newAmount:
 *                         type: number
 *                         format: float
 *                         description: Final adjusted amount
 *                       isValid:
 *                         type: boolean
 *                         description: Indicates if the pricing detail is valid
 *       404:
 *         description: Unable to fetch profile data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Profile not found
 */
router.get("/:id", profileController.getProfileProductsData);

export default router;
