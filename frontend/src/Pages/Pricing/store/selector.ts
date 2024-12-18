import { RootState } from "../../../store";

const selectSelectedPricingProfile = (state: RootState) =>
  state.pricing.selectedPricingProfile;

const selectPricingProfileOptions = (state: RootState) =>
  state.pricing.pricingProfileOptions;
const selectSelectedPricingAdjustmentMode = (state: RootState) =>
  state.pricing.selectedPricingAdjustmentMode;

const selectPricingAdjustmentOptions = (state: RootState) =>
  state.pricing.pricingAdjustmentOptions;
const selectSelectedPricingIncrementMode = (state: RootState) =>
  state.pricing.selectedPricingIncrementMode;

const selectPricingIncrementOptions = (state: RootState) =>
  state.pricing.pricingIncrementOptions;

export {
  selectSelectedPricingProfile,
  selectPricingProfileOptions,
  selectSelectedPricingAdjustmentMode,
  selectPricingAdjustmentOptions,
  selectSelectedPricingIncrementMode,
  selectPricingIncrementOptions,
};
