import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export const currentExpensesSlice = createSlice({
  name: "currentExpenses",
  initialState: { day: 0, amount: 0 },
  reducers: {
    setCurrentExpenses: (state, action) => {
      state.day = action.payload.day;
      state.amount = action.payload.amount;
    },
    resetCurrentExpenses: (state) => {
      state.day = 0;
      state.amount = 0;
    },
  },
});
export const { setCurrentExpenses, resetCurrentExpenses } =
  currentExpensesSlice.actions;
export const selectCurrentExpenses = (state: RootState) =>
  state.currentExpenses;
export default currentExpensesSlice.reducer;
