import {
  brands,
  categories,
  profiles,
  segments,
  subCategories,
} from "../../data/products";
import {
  InitialData,
  PROFILE_STATUS,
} from "../../entities/pricing/InitialData.entity";

export class PricingService {
  getInitialData(): InitialData {
    return {
      ProfileData: {
        id: "a1b2c3d4-d5e6-7f8g-9h0i-1j2k3l4m5n6p",
        name: "Heaps Normal #4",
        expDate: new Date("2024-12-31T23:59:59Z"),
        status: PROFILE_STATUS.COMPLETE,
        isValid: true,
      },
      InitialData: {
        Categories: categories.map((category) => ({
          id: category.id,
          name: category.name,
          subCategories: subCategories
            .filter((subCategory) => subCategory.categoryId === category.id)
            .map((subCategory) => ({
              id: subCategory.id,
              name: subCategory.name,
            })),
        })),
        Segments: segments.map((segment) => ({
          id: segment.id,
          name: segment.name,
        })),
        Brands: brands.map((brand) => ({
          id: brand.id,
          name: brand.name,
        })),
      },
      AllProfiles: profiles.map((profile) => ({
        id: profile.id,
        name: profile.name,
      }))
    };
  }
}
