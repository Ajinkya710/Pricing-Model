import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialData } from "./types";
import axios from "axios";
import { RootState } from "../../../store";

export const fetchInitialData = createAsyncThunk<InitialData>(
  "fetchInitialData",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/pricing/initial-data",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
);

export const fetchProductsData = createAsyncThunk<
  InitialData,
  void,
  { state: RootState }
>("fetchProductsData", async (_, { getState }) => {
  const state = getState();
  const { searchString, category, segment, brand } = state.pricing.searchQuery;

  const response = await axios.get("http://localhost:5000/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      search: searchString,
      category,
      segment,
      brand,
    },
  });

  return response.data;
});
