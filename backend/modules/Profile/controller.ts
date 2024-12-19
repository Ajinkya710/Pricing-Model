import { Request, Response } from "express";
import { ProfileService } from "./service";

export class ProfileController {
  private profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  // Get profile and products data
  getProfileProductsData = (req: Request, res: Response): void => {
    const { id } = req.params;

    const data = this.profileService.getProfilePricingData(id as string);
    if (!data) {
      res.status(404).json({ error: "Unable to fetch profile data" });
    } else {
      res.json(data);
    }
  };
}
