import { createSlice } from "@reduxjs/toolkit";

interface IModeState {
  mode: "light" | "dark";
}

const initialState: IModeState = {
  mode: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme(state, action) {
        
      state.mode = action.payload;
    },
  },
});
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
