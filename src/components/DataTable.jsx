import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataTable = ({ data }) => {
  if (data.length === 0) return <></>;

  const highestRole = data.reduce((prev, current) =>
    prev.percent > current.percent ? prev : current
  );

  const chartData = {
    labels: data.map((item) => item.role),
    datasets: [
      {
        label: "Role Percentage",
        data: data.map((item) => item.percent),
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        color: "white",
        text: "Role Percentage Bar Graph",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  };

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h3>Highest Role</h3>
        <p>
          <strong>{highestRole.role}</strong>: {highestRole.percent}%
        </p>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DataTable;
