import { Router } from "express";
import { ProfileController } from "./controller";

const router = Router();
const profileController = new ProfileController();

/**
 * @swagger
 * /profile/:
 *   get:
 *     summary: Get all profiles
 *     tags:
 *       - Profile
 *     responses:
 *       200:
 *         description: A list of profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier for the profile
 *                   name:
 *                     type: string
 *                     description: The name of the profile
 *                   expDate:
 *                     type: string
 *                     format: date
 *                     description: The expiration date of the profile
 *                   status:
 *                     type: integer
 *                     description: The status of the profile (e.g., 1 for complete, 0 for incomplete)
 *                   completed:
 *                     type: integer
 *                     description: Indicates whether the profile is completed (1) or not (0)
 *                   isValid:
 *                     type: boolean
 *                     description: Indicates if the profile is valid
 *       404:
 *         description: No profiles found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No profiles found"
 */
router.get("/", profileController.getAllProfiles);

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

/**
 * @swagger
 * /profile/{id}:
 *   post:
 *     summary: Save and update profile data
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Profile ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProfileData:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Unique ID of the profile
 *                   name:
 *                     type: string
 *                     description: Name of the profile
 *                   expDate:
 *                     type: string
 *                     format: date-time
 *                     description: Expiration date of the profile
 *                   status:
 *                     type: integer
 *                     description: Status of the profile
 *                   isValid:
 *                     type: boolean
 *                     description: Indicates if the profile is valid
 *               PricingDetails:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Unique ID of the pricing detail
 *                     productId:
 *                       type: string
 *                       description: Product ID linked to the pricing detail
 *                     profileId:
 *                       type: string
 *                       description: Profile ID associated with the pricing detail
 *                     amount:
 *                       type: number
 *                       format: float
 *                       description: Original pricing amount
 *                     adjustment:
 *                       type: number
 *                       format: float
 *                       description: Adjusted value
 *                     newAmount:
 *                       type: number
 *                       format: float
 *                       description: Final adjusted amount
 *                     isValid:
 *                       type: boolean
 *                       description: Indicates if the pricing detail is valid
 */
router.post("/:id", profileController.saveProfileData);

export default router;
