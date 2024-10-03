// components/LineChart.js
"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components with ChartJS
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Solid Line Dataset",
        data: [30, 20, 50, 40, 60, 50, 10],
        borderColor: "rgba(24, 20, 243, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        borderWidth: 2,
      },
      {
        label: "Dashed Line Dataset",
        data: [50, 60, 40, 30, 50, 70, 40],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        borderWidth: 2,
        borderDash: [5, 5], // Dashed line configuration
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart stretches
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  return (
    <div className="  rounded-xl">
      <Line data={data} options={options} width={600} height={330} />
    </div>
  );
};

export default LineChart;
