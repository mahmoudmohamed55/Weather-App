import type { WeatherPageUI } from "@app-types/WeatherPageUI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetData = createAsyncThunk(
  "data/actGetData",
  async (city: string , thunkAPi) => {
    const { rejectWithValue, signal } = thunkAPi;
    try {
      const res = await axios.get<WeatherPageUI>(
        `https://api.weatherapi.com/v1/forecast.json?key=8e9ca571f53b4ebea5a101628250808&q=${city}&days=3&aqi=no&alerts=no`,
        {
          signal,
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export default actGetData;
