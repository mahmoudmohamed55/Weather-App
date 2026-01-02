import type { TLoading } from "@app-types/loading.types";
import type { WeatherPageUI } from "@app-types/WeatherPageUI";
import { createSlice } from "@reduxjs/toolkit";
import actGetData from "./actGetData";

interface IDataState {
  records: WeatherPageUI | null;
  loading: TLoading;
  error: string | null;
}
const initialState: IDataState = {
  records: null,
  loading: "idle",
  error: null,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(actGetData.pending, (state) => {
      state.loading = "loading";
      state.error = null;
    });
    builder.addCase(actGetData.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload ?? null;
    });
    builder.addCase(actGetData.rejected, (state, action) => {
      state.loading = "loading";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export default dataSlice.reducer;
export { actGetData };
