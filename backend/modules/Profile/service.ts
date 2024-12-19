import {
  brands,
  categories,
  pricingDetail,
  profiles,
  segments,
  subCategories,
} from "../../data/products";
import { PROFILE_STATUS } from "../../entities/pricing/InitialData.entity";
import { ProfileProductData } from "../../entities/profile/Profile.entity";

export class ProfileService {
  getProfilePricingData(profileId: string): ProfileProductData | null {
    const profileData = profiles.find(
      (profile) => profile.id === profileId && profile.isValid
    );

    if (!profileData) {
      return null;
    }

    const pricingDetails = pricingDetail.filter(
      (detail) => detail.profileId === profileId && detail.isValid
    );

    return {
      profileData,
      pricingDetails,
    };
  }
}
