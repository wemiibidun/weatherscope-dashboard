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
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph(props) {
  const getData = () => {
    // See API documentation here: https://openweathermap.org/forecast5
    const data = props.data;
   
    const humidity = [];
    const wind_speed = [];
    const temp_time = [];
    const temp_c = [];
    const temp_f = [];

    // The required day index to display in the graph
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
        temp_time.push(d.toLocaleTimeString());
      });
    }
    //console.log('Graph mounted')
    // console.log('temp_max_f:', temp_max_f);
    // console.log('temp_max_c:', temp_max_c);
    return {
      labels: temp_time,
      datasets: [
        {
            data: props.settings.tempCelsius ? temp_c : temp_f,
            borderColor: "blue",
            fill: false,
            label: props.settings.tempCelsius ? "Temperature (C)" : "Temperature (F)",
        },
        {
          data: props.settings.displayHumidity ? humidity : [],
          borderColor: "green",
          fill: false,
          label: "Humidity (%)",
          hidden: !props.settings.displayHumidity,
        },
        {
          data: props.settings.displayWind ? wind_speed : [],
          borderColor: "purple",
          fill: false,
          label: "Wind Speed (m/s)",
          hidden: !props.settings.displayWind,
        },
      ],
    };
  };

  const options = {
    legend: { display: true },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };


  return (
    <div>
      <h4 className="text-dark">Hourly Temperature Data</h4>

      <div style={{height:"60vh",position:"relative", marginBottom:"1%", padding:"1%"}}>

      {props.data && <Line data={getData()} 
      options={options} />}
      </div>
    </div>
  );
}
