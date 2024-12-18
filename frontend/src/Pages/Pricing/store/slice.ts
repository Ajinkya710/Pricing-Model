import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PRICE_ADJUSTMENT_MODE,
  PRICE_INCREMENT_MODE,
  pricingAdjustmentOptions,
  pricingIncrementOptions,
  pricingProfileOptions,
  PROFILE_TYPE,
} from "./types";

interface PricingState {
  data: any[];
  selectedPricingProfile: PROFILE_TYPE | null;
  pricingProfileOptions: {
    name: string;
    value: PROFILE_TYPE;
  }[];
  selectedPricingAdjustmentMode: PRICE_ADJUSTMENT_MODE | null;
  pricingAdjustmentOptions: {
    name: string;
    value: PRICE_ADJUSTMENT_MODE;
  }[];
  selectedPricingIncrementMode: PRICE_INCREMENT_MODE | null;
  pricingIncrementOptions: {
    name: string;
    value: PRICE_INCREMENT_MODE;
  }[];
}

const initialState: PricingState = {
  data: [],
  selectedPricingProfile: null,
  pricingProfileOptions: pricingProfileOptions,
  selectedPricingAdjustmentMode: null,
  pricingAdjustmentOptions: pricingAdjustmentOptions,
  selectedPricingIncrementMode: null,
  pricingIncrementOptions: pricingIncrementOptions,
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    setSelectedPricingProfile: (state, action: PayloadAction<PROFILE_TYPE>) => {
      state.selectedPricingProfile = action.payload;
    },
    setSelectedPricingAdjustmentMode: (
      state,
      action: PayloadAction<PRICE_ADJUSTMENT_MODE>
    ) => {
      state.selectedPricingAdjustmentMode = action.payload;
    },
    setSelectedPricingIncrementMode: (
      state,
      action: PayloadAction<PRICE_INCREMENT_MODE>
    ) => {
      state.selectedPricingIncrementMode = action.payload;
    },
  },
  extraReducers: () => {},
});

export const {
  setSelectedPricingProfile,
  setSelectedPricingAdjustmentMode,
  setSelectedPricingIncrementMode,
} = pricingSlice.actions;
export default pricingSlice.reducer;
