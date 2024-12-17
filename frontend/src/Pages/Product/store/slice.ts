import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  data: any[];
}

const initialState: ProductState = {
    data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: () => {
  },
});

export default productSlice.reducer;
