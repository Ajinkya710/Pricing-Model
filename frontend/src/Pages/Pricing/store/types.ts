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

export { PROFILE_TYPE, PRICE_ADJUSTMENT_MODE, PRICE_INCREMENT_MODE };
export {
  pricingProfileOptions,
  pricingAdjustmentOptions,
  pricingIncrementOptions,
};
