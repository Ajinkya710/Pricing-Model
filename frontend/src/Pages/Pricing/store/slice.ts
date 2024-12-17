import { createSlice } from "@reduxjs/toolkit";

interface PricingState {
  data: any[];
}

const initialState: PricingState = {
    data: [],
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
  },
  extraReducers: () => {
  },
});

export default pricingSlice.reducer;
