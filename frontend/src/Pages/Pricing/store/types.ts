type PricingProfileOption = {
  name: string;
  value: PROFILE_TYPE;
}[];

type PricingAdjustmentOptions = {
  name: string;
  value: PRICE_ADJUSTMENT_MODE;
}[];

type PricingIncrementOptions = {
  name: string;
  value: PRICE_INCREMENT_MODE;
}[];

type Product = {
  id: string;
  title: string;
  skuCode: string;
  brandId: string;
  categoryId: string;
  subCategoryId: string;
  segmentId: string;
  globalWholesalePrice: number;
};

type SelectedProduct = {
  id: string;
  adjustmentMode: PRICE_ADJUSTMENT_MODE;
  increamentMode: PRICE_INCREMENT_MODE;
  adjustmentAmount: number;
  basedOnAmount: number;
  newAmount: number;
}

type SearchQuery = {
  searchString: string;
  category: string;
  segment: string;
  brand: string;
};

enum PROFILE_TYPE {
  ONE_PRODUCT = 1,
  MULTIPLE_PRODUCT,
  ALL_PRODUCT,
}

enum PRICE_ADJUSTMENT_MODE {
  FIXED = 1,
  DYNAMIC,
}

enum PRICE_INCREMENT_MODE {
  INCREASE = 1,
  DECREASE,
}

enum PROFILE_STATUS {
  NOT_COMPLETE = 0,
  COMPLETE,
}

const pricingProfileOptions = [
  {
    name: "One Product",
    value: PROFILE_TYPE.ONE_PRODUCT,
  },
  {
    name: "Multiple Products",
    value: PROFILE_TYPE.MULTIPLE_PRODUCT,
  },
  {
    name: "All Products",
    value: PROFILE_TYPE.ALL_PRODUCT,
  },
];

const pricingAdjustmentOptions = [
  {
    name: "Fixed ($)",
    value: PRICE_ADJUSTMENT_MODE.FIXED,
  },
  {
    name: "Dynamic (%)",
    value: PRICE_ADJUSTMENT_MODE.DYNAMIC,
  },
];

const pricingIncrementOptions = [
  {
    name: "Increase +",
    value: PRICE_INCREMENT_MODE.INCREASE,
  },
  {
    name: "Decrease -",
    value: PRICE_INCREMENT_MODE.DECREASE,
  },
];

type InitialData = {
  ProfileData: {
    id: string;
    status: PROFILE_STATUS;
  };
  InitialData: {
    Categories: {
      id: string;
      name: string;
      subCategories: {
        id: string;
        name: string;
      }[];
    }[];
    Segments: {
      id: string;
      name: string;
    }[];
    Brands: {
      id: string;
      name: string;
    }[];
  };
};

export { PROFILE_TYPE, PRICE_ADJUSTMENT_MODE, PRICE_INCREMENT_MODE };
export {
  pricingProfileOptions,
  pricingAdjustmentOptions,
  pricingIncrementOptions,
};
export type {
  Product,
  SelectedProduct,
  InitialData,
  SearchQuery,
  PricingProfileOption,
  PricingAdjustmentOptions,
  PricingIncrementOptions,
};
