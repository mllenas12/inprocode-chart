import { BarChart } from "./BarChart";
import { useAppSelector } from "../../hooks/storeHooks";
import { selectCurrentExpenses } from "../../features/currentExpenses/currentExpensesSlice";
import { selectChartData } from "../../features/chartData/chartDataSlice";
import { useTranslation } from "react-i18next";
const Main = () => {
  const currentExpenses = useAppSelector(selectCurrentExpenses);
  const dataChart = useAppSelector(selectChartData);
  const { t } = useTranslation("translations");

  const calculateDif = (): string => {
    const todayExpense: number = currentExpenses.amount;
    const todayIndex: number = currentExpenses.day;
    const yesterdayIndex: number = todayIndex - 1;
    const yesterdayExpense: number =
      yesterdayIndex >= 0 ? dataChart[yesterdayIndex].y : todayExpense;
    const difference: number =
      ((todayExpense - yesterdayExpense) / yesterdayExpense) * 100;
    const sign: string = todayExpense >= yesterdayExpense ? "+" : "";
    return `${sign} ${difference.toFixed(2)}%`;
  };
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2 text-black">
      <h1 className="text-lg font-bold px-2">{t("main.title")}</h1>
      <div className="py-2">
        <BarChart />
      </div>
      <hr className="border rounded" />
      <div className="flex justify-between my-4">
        <div>
          <h5 className="text-xs font-semibold text-neutral-300">
            {t("main.currentExpenses")}
          </h5>
          <h2 className="text-2xl font-bold">{currentExpenses.amount} €</h2>
        </div>
        <div className="flex flex-col items-end my-2">
          <p className="text-xs font-bold">{calculateDif()}</p>
          <p className="text-xs font-semibold">{t("main.yesterday")}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
