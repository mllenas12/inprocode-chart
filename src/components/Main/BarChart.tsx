import { selectChartData } from "../../features/chartData/chartDataSlice";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { setCurrentExpenses } from "../../features/currentExpenses/currentExpensesSlice";
import { Bar, getElementsAtEvent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  InteractionItem,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const BarChart = () => {
  const dataChart = useAppSelector(selectChartData);
  const currentWeekData = dataChart.chartCoord[dataChart.currentIndex];

  const dispatch = useAppDispatch();
  const [barColors, setBarColors] = useState<string[]>(["#EC765C"]);
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#c2c3bd",
        },
      },
      y: {
        border: {
          dash: [3],
        },
        display: true,
        ticks: {
          stepSize: 500,
          color: "#c2c3bd",
          callback: (value: number | string) => (value === 500 ? value : ""),
        },
      },
    },
  };

  const data = {
    labels: currentWeekData.map((data) => data.x),
    datasets: [
      {
        label: "amount",
        data: currentWeekData.map((data) => data.y),
        borderRadius: 3,
        backgroundColor: barColors,
        hoverBackgroundColor: "#74B6BD",
      },
    ],
  };
  const changeColor = (element: InteractionItem[]) => {
    const index = element[0].index;
    const basicColors = [
      "#EC765C",
      "#EC765C",
      "#EC765C",
      "#EC765C",
      "#EC765C",
      "#EC765C",
      "#EC765C",
    ];
    const updateColors = [...basicColors];
    setBarColors(updateColors);
    updateColors[index] = "#74B6BD";
    setBarColors(updateColors);
  };

  const chartRef = useRef(null);

  const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (chartRef.current) {
      const element: any = getElementsAtEvent(chartRef.current, event);
      if (element.length > 0) {
        const index = element[0].index;
        const expenses = element[0].element.$context.raw;
        if (expenses !== undefined) {
          dispatch(
            setCurrentExpenses({
              day: index,
              amount: expenses,
            })
          );
          changeColor(element);
        }
      }
    }
  };

  return (
    <Bar
      options={options}
      data={data}
      onClick={onClick}
      ref={chartRef}
      data-testid="bar-chart"
    />
  );
};
