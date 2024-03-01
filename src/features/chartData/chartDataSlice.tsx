import { createSlice } from "@reduxjs/toolkit";
import chart from "../../data/chart.json";
import { RootState } from "../../app/store";

export const chartDataSlice = createSlice({
  name: "chartData",
  initialState: chart,
  reducers: {},
});
export const {} = chartDataSlice.actions;
export const selectChartData = (state: RootState) => state.chartData;
export default chartDataSlice.reducer;
