import { createSlice } from "@reduxjs/toolkit";
import chartCoord from "../../data/chartCoord.json";
import { RootState } from "../../app/store";

export const chartDataSlice = createSlice({
  name: "chartData",
  initialState: chartCoord,
  reducers: {
    changeLang: (state, action) => {
      state.forEach((coord, index) => (coord.x = action.payload[index]));
    },
  },
});
export const { changeLang } = chartDataSlice.actions;
export const selectChartData = (state: RootState) => state.chartData;
export default chartDataSlice.reducer;
