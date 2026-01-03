import type { TLoading } from "@app-types/loading.types";
import type { WeatherPageUI } from "@app-types/WeatherPageUI";
import { createSlice } from "@reduxjs/toolkit";
import actGetData from "./actGetData";

interface IDataState {
  records: WeatherPageUI | null;
  loading: TLoading;
  temp: "C" | "F";
  error: string | null;
}
const initialState: IDataState = {
  records: null,
  loading: "idle",
  temp: "C",
  error: null,
};
const dataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleTemp: (state, action) => {
      console.log(action.payload)
      state.temp = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(actGetData.pending, (state) => {
      state.loading = "loading";
      state.error = null;
    });
    builder.addCase(actGetData.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload ?? null;
      console.log(action.payload);
    });
    builder.addCase(actGetData.rejected, (state, action) => {
      state.loading = "failed";

      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export default dataSlice.reducer;
export const { toggleTemp } = dataSlice.actions;
export { actGetData };
