import { pricingDetail, profiles } from "../../data/products";
import { PROFILE_STATUS } from "../../entities/pricing/InitialData.entity";
import {
  ProfileProductData,
  Profiles,
} from "../../entities/profile/Profile.entity";

export class ProfileService {
  getAllProfiles(): Profiles[] {
    return profiles;
  }
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

  saveProfileData = (profileId: string, data: any): boolean => {
    let profile = profiles.find((p) => p.id === profileId);
    if (!profile) {
      return false;
    }

    const profileData = {
      id: profile.id,
      name: profile.name,
      expDate: profile.expDate,
      status: PROFILE_STATUS.COMPLETE,
      basedOn: data.ProfileData.basedOn,
      adjustmentMode: data.ProfileData.adjustmentMode,
      increamentMode: data.ProfileData.increamentMode,
      isValid: true,
    };

    const index = profiles.findIndex((p) => p.id === profileId);
    if (index !== -1) {
      profiles[index] = { ...profiles[index], ...profileData };
    }

    const newPricingData = data.PriceDetails;
    for (const pricing of newPricingData) {
      pricingDetail.push(pricing);
    }

    return true;
  };
}
