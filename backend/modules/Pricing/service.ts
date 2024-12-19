import {
  brands,
  categories,
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
        status: PROFILE_STATUS.COMPLETE,
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
    };
  }
}