import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialData } from "./types";
import axios from "axios";

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
