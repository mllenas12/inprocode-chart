import { configureStore } from "@reduxjs/toolkit";
import chartDataReducer from "../features/chartData/chartDataSlice";
import currentExpensesReducer from "../features/currentExpenses/currentExpensesSlice";

export const store = configureStore({
  reducer: {
    chartData: chartDataReducer,
    currentExpenses: currentExpensesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
