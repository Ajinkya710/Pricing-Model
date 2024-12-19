import { PROFILE_STATUS } from "../pricing/InitialData.entity";
import { PricingDetail } from "../pricing/PricingDetail.entity";

export interface Profiles {
  id: string;
  name: string;
  expDate: Date;
  status: PROFILE_STATUS;
  isValid: boolean;
}

export interface ProfileProductData {
  profileData: Profiles;
  pricingDetails: PricingDetail[];
}
