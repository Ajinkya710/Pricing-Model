import { PROFILE_STATUS } from "../pricing/InitialData.entity";
import { PricingDetail } from "../pricing/PricingDetail.entity";

enum PRICE_ADJUSTMENT_MODE {
  FIXED = 1,
  DYNAMIC,
}

enum PRICE_INCREMENT_MODE {
  INCREASE = 1,
  DECREASE,
}

export interface Profiles {
  id: string;
  name: string;
  expDate: Date;
  status: PROFILE_STATUS;
  basedOn: string | null;
  adjustmentMode: PRICE_ADJUSTMENT_MODE | null;
  increamentMode: PRICE_INCREMENT_MODE | null;
  isValid: boolean;
}

export interface ProfileProductData {
  profileData: Profiles;
  pricingDetails: PricingDetail[];
}
