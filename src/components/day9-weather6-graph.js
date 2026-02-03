import React from "react";
// React-Line chart documentation https://react-chartjs-2.js.org/examples/line-chart
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Graph(props) {
  const getData = () => {
    const data = props.data;

    const humidity = [];
    const wind_speed = [];
    const temp_time = [];
    const temp_c = [];
    const temp_f = [];

    const startIndex = props.dayIndex * 8;
    const endIndex = (props.dayIndex + 1) * 8 - 1;

    if (data && data.list) {
      data.list.forEach((sample, index) => {
        if (index < startIndex || index > endIndex) return;
        const d = new Date(sample.dt * 1000);
        temp_c.push(sample.main.temp);
        temp_f.push((sample.main.temp * 9) / 5 + 32);
        humidity.push(sample.main.humidity);
        wind_speed.push(sample.wind.speed);
        temp_time.push(
          d.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })
        );
      });
    }

    return {
      labels: temp_time,
      datasets: [
        {
          data: props.settings.displayTemp
            ? props.settings.tempCelsius
              ? temp_c
              : temp_f
            : [],
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56, 189, 248, 0.2)",
          fill: true,
          tension: 0.35,
          label: props.settings.tempCelsius ? "Temp (C)" : "Temp (F)",
          hidden: !props.settings.displayTemp,
        },
        {
          data: props.settings.displayHumidity ? humidity : [],
          borderColor: "#34d399",
          backgroundColor: "rgba(52, 211, 153, 0.2)",
          fill: true,
          tension: 0.35,
          label: "Humidity (%)",
          hidden: !props.settings.displayHumidity,
        },
        {
          data: props.settings.displayWind ? wind_speed : [],
          borderColor: "#a78bfa",
          backgroundColor: "rgba(167, 139, 250, 0.2)",
          fill: true,
          tension: 0.35,
          label: "Wind (m/s)",
          hidden: !props.settings.displayWind,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          color: "#e2e8f0",
          boxWidth: 10,
          boxHeight: 10,
          padding: 10,
          font: { size: 11 },
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#cbd5f5" },
        grid: { color: "rgba(148, 163, 184, 0.15)" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#cbd5f5" },
        grid: { color: "rgba(148, 163, 184, 0.15)" },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="graph-card panel-card bg-dark bg-opacity-25 rounded-4 p-3 shadow-sm text-light h-100">
      <h4 className="text-light">Hourly Conditions</h4>
      <div style={{ height: "300px", position: "relative" }}>
        {props.data && <Line data={getData()} options={options} />}
      </div>
    </div>
  );
}
