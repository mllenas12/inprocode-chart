import { createSlice } from "@reduxjs/toolkit";
import chartCoord from "../../data/chartCoord.json";
import { RootState } from "../../app/store";

export const chartDataSlice = createSlice({
  name: "chartData",
  initialState: chartCoord,
  reducers: {},
});
export const {} = chartDataSlice.actions;
export const selectChartData = (state: RootState) => state.chartData;
export default chartDataSlice.reducer;
