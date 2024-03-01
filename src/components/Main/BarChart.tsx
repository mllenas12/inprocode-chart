import { useAppSelector } from "../../hooks/storeHooks";
import { selectChartData } from "../../features/chartData/chartDataSlice";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";

export const BarChart = () => {
  const chartData = useAppSelector(selectChartData);
  ChartJS.register(CategoryScale);

  const options = {
    plugins: {
      legend: {
        display: false,
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
          callback: function (value: any) {
            return value === 500 ? value : "";
          },
        },
      },
    },
  };

  const data = {
    labels: chartData.map((data) => data.x),
    datasets: [
      {
        label: "amount",
        data: chartData.map((data) => data.y),
        borderRadius: 3,
        backgroundColor: [
          "#EB755C",
          "#EB755C",
          "#EB755C",
          "#EB755C",
          "#EB755C",
          "#EB755C",
          "#74B6BD",
        ],
        hoverBackgroundColor: "#74B6BD",
      },
    ],
  };
  return <Bar options={options} data={data} data-testid="bar-chart" />;
};
