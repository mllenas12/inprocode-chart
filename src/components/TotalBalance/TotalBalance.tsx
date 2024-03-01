import { useSelector } from "react-redux";
import { selectChartData } from "../../features/chartData/chartDataSlice";

const TotalBalance = () => {
  const data = useSelector(selectChartData);
  const yValues = data.map((coord: any) => coord.y);
  const total = yValues.reduce((el, ac) => el + ac, 0);
  return (
    <div className="bg-[#ec755c] flex justify-between text-white p-4 rounded-lg">
      <div className="">
        <p className="text-xs">Balanç total</p>
        <p className="font-semibold">{total} €</p>
      </div>
      <div className="flex gap-2 my-auto">
        <img
          src="/images/left-arrow.svg"
          alt="left-arrow"
          className="w-4 h-4"
        />
        <img
          src="/images/right-arrow.svg"
          alt="right-arrow"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default TotalBalance;
