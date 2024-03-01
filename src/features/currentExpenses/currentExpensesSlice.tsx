import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export const currentExpensesSlice = createSlice({
  name: "currentExpenses",
  initialState: { day: 6, amount: 640 },
  reducers: {
    setCurrentExpenses: (state, action) => {
      state.day = action.payload.day;
      state.amount = action.payload.amount;
    },
  },
});
export const { setCurrentExpenses } = currentExpensesSlice.actions;
export const selectCurrentExpenses = (state: RootState) =>
  state.currentExpenses;
export default currentExpensesSlice.reducer;
