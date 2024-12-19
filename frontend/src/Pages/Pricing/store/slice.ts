import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialData,
  PRICE_ADJUSTMENT_MODE,
  PRICE_INCREMENT_MODE,
  PricingAdjustmentOptions,
  pricingAdjustmentOptions,
  PricingIncrementOptions,
  pricingIncrementOptions,
  PricingProfileOption,
  pricingProfileOptions,
  PROFILE_TYPE,
} from "./types";
import { fetchInitialData } from "./action";

interface PricingState {
  initialData: InitialData | null;
  selectedPricingProfile: PROFILE_TYPE | null;
  pricingProfileOptions: PricingProfileOption;
  selectedPricingAdjustmentMode: PRICE_ADJUSTMENT_MODE | null;
  pricingAdjustmentOptions: PricingAdjustmentOptions;
  selectedPricingIncrementMode: PRICE_INCREMENT_MODE | null;
  pricingIncrementOptions: PricingIncrementOptions;
}

const initialState: PricingState = {
  initialData: null,
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
  extraReducers: (builder) => {
    builder
    .addCase(
      fetchInitialData.fulfilled,
      (state, action: any) => {
        state.initialData = action.payload;
      }
    )
    .addCase(fetchInitialData.rejected, (state, action) => {
      // state.error = action.error.message || "Failed to fetch colors";
    });
  },
});

export const {
  setSelectedPricingProfile,
  setSelectedPricingAdjustmentMode,
  setSelectedPricingIncrementMode,
} = pricingSlice.actions;
export default pricingSlice.reducer;
