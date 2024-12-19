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
      ProfileData: profiles[1],
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
      AllProfiles: profiles
        .filter((profile) => profile.status === PROFILE_STATUS.COMPLETE)
        .map((profile) => ({
          id: profile.id,
          name: profile.name,
        })),
    };
  }
}
