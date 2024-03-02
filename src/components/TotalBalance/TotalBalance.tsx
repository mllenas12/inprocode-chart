import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { ICoord } from "../../types/types";
import { useTranslation } from "react-i18next";
import { resetCurrentExpenses } from "../../features/currentExpenses/currentExpensesSlice";
import {
  nextWeek,
  previousWeek,
  changeHasNextWeek,
  changeHasPreviousWeek,
  selectChartData,
} from "../../features/chartData/chartDataSlice";

const TotalBalance = () => {
  const { t } = useTranslation("translations");
  const dataChart = useAppSelector(selectChartData);
  const currentWeekData = dataChart.chartCoord[dataChart.currentIndex];
  const yValues = currentWeekData.map((coord: ICoord) => coord.y);
  const total = yValues.reduce((el, ac) => el + ac, 0);
  const dispatch = useAppDispatch();
  const hasNextWeek = dataChart.hasNextWeek;
  const hasPreviousWeek = dataChart.hasPreviousWeek;

  const changeToNextWeek = () => {
    dispatch(nextWeek());
    if (dataChart.currentIndex == dataChart.chartCoord.length - 2) {
      dispatch(changeHasNextWeek(false));
      dispatch(changeHasPreviousWeek(true));
    } else {
      dispatch(changeHasNextWeek(true));
      dispatch(changeHasPreviousWeek(true));
    }
    dispatch(resetCurrentExpenses());
  };

  const changeToPreviousWeek = () => {
    dispatch(previousWeek());
    if (dataChart.currentIndex == 1) {
      dispatch(changeHasPreviousWeek(false));
      dispatch(changeHasNextWeek(true));
    } else {
      dispatch(changeHasNextWeek(true));
    }
    dispatch(resetCurrentExpenses());
  };

  return (
    <div className="bg-[#ec755c] flex justify-between text-white p-4 rounded-lg">
      <div className="">
        <p className="text-xs">{t("totalBalance.title")}</p>
        <p className="font-semibold">{total} €</p>
      </div>
      <div className="flex gap-2 my-auto">
        <button onClick={changeToPreviousWeek}>
          <img
            src="/images/left-arrow.svg"
            alt="left-arrow"
            className={`w-4 h-4 ${hasPreviousWeek ? "" : "hidden"}`}
          />
        </button>
        <button onClick={changeToNextWeek}>
          <img
            src="/images/right-arrow.svg"
            alt="right-arrow"
            className={`w-4 h-4 ${hasNextWeek ? "" : "hidden"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default TotalBalance;
