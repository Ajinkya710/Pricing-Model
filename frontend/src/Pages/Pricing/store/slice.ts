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
  Product,
  PROFILE_TYPE,
  SearchQuery,
  SelectedProduct,
} from "./types";
import { fetchInitialData, fetchProductsData } from "./action";

interface PricingState {
  initialData: InitialData | null;
  selectedPricingProfile: PROFILE_TYPE | null;
  pricingProfileOptions: PricingProfileOption;
  selectedPricingAdjustmentMode: PRICE_ADJUSTMENT_MODE | null;
  pricingAdjustmentOptions: PricingAdjustmentOptions;
  selectedPricingIncrementMode: PRICE_INCREMENT_MODE | null;
  pricingIncrementOptions: PricingIncrementOptions;
  searchQuery: SearchQuery;
  searchProductData: Product[];
  selectedProducts: Product[];
  adjustedProductData: SelectedProduct[];
}

const initialState: PricingState = {
  initialData: null,
  selectedPricingProfile: null,
  pricingProfileOptions: pricingProfileOptions,
  selectedPricingAdjustmentMode: PRICE_ADJUSTMENT_MODE.FIXED,
  pricingAdjustmentOptions: pricingAdjustmentOptions,
  selectedPricingIncrementMode: PRICE_INCREMENT_MODE.INCREASE,
  pricingIncrementOptions: pricingIncrementOptions,
  searchQuery: {
    searchString: "",
    category: "",
    segment: "",
    brand: "",
  },
  searchProductData: [],
  selectedProducts: [],
  adjustedProductData: [],
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
    setSearchQuery: (
      state,
      action: PayloadAction<{ type: keyof SearchQuery; value: string }>
    ) => {
      const { type, value } = action.payload;
      state.searchQuery[type] = value;
    },
    toggleProductSelection: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;
      if (state.selectedProducts.some((product) => product.id === productId)) {
        state.selectedProducts = state.selectedProducts.filter(
          (product) => product.id !== productId
        );
      } else {
        state.selectedProducts.push(action.payload);
      }
    },
    selectAllProducts: (state) => {
      state.selectedProducts = state.searchProductData;
    },
    deselectAllProducts: (state) => {
      state.selectedProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.fulfilled, (state, action: any) => {
        state.initialData = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state, _) => {
        state.initialData = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, action: any) => {
        state.searchProductData = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, _) => {
        state.searchProductData = [];
      });
  },
});

export const {
  setSelectedPricingProfile,
  setSelectedPricingAdjustmentMode,
  setSelectedPricingIncrementMode,
  toggleProductSelection,
  selectAllProducts,
  deselectAllProducts,
  setSearchQuery
} = pricingSlice.actions;
export default pricingSlice.reducer;
