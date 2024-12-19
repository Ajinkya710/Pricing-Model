import { Request, Response } from "express";
import { ProfileService } from "./service";

export class ProfileController {
  private profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  // Get All Profile
  getAllProfiles = (req: Request, res: Response): void => {
    const data = this.profileService.getAllProfiles();
    if (!data) {
      res.status(404).json({ error: "Unable to fetch profile data" });
    } else {
      res.json(data);
    }
  };

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

  // Save profile data
  saveProfileData = (req: Request, res: Response): void => {
    const { id } = req.params;
    const data = req.body;

    const result = this.profileService.saveProfileData(id, data);
    if (!result) {
      res.status(404).json({ error: "Failed to save profile data" });
    } else {
      res.status(200).json({ message: "Profile data saved successfully" });
    }
  };
}
