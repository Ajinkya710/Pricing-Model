import { Request, Response } from "express";
import { PricingService } from "./service";

export class PricingController {
  private pricingService: PricingService;

  constructor() {
    this.pricingService = new PricingService();
  }

  // Get initial data
  getInitialData = (req: Request, res: Response): void => {
    const data = this.pricingService.getInitialData();
    if (!data) {
      res.status(404).json({ error: "Unable to fetch initial data" });
    } else {
      res.json(data);
    }
  };
}
