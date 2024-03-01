import { createSlice } from "@reduxjs/toolkit";
import chartCoord from "../../data/chartCoord.json";
import { RootState } from "../../app/store";

export const chartDataSlice = createSlice({
  name: "chartData",
  initialState: {
    currentIndex: 0,
    chartCoord: chartCoord,
    hasNextWeek: true,
    hasPreviousWeek: false,
  },
  reducers: {
    changeLang: (state, action) => {
      state.chartCoord[state.currentIndex].forEach(
        (coord, index) => (coord.x = action.payload[index])
      );
    },
    nextWeek: (state) => {
      state.currentIndex += 1;
    },
    previousWeek: (state) => {
      state.currentIndex -= 1;
    },
    changeHasNextWeek: (state, action) => {
      state.hasNextWeek = action.payload;
    },
    changeHasPreviousWeek: (state, action) => {
      state.hasPreviousWeek = action.payload;
    },
  },
});
export const {
  changeLang,
  nextWeek,
  previousWeek,
  changeHasNextWeek,
  changeHasPreviousWeek,
} = chartDataSlice.actions;
export const selectChartData = (state: RootState) => state.chartData;
export default chartDataSlice.reducer;
