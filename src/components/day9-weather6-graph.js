import React from 'react';
// React-Line chart documentation https://react-chartjs-2.js.org/examples/line-chart
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
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
        const temp_min_f = [];
        const temp_max_f = [];
        const temp_min_c = [];
        const temp_max_c = [];
        const humidity = [];
        const wind_speed = [];
        const temp_time = [];

        // The required day index to display in the graph 
        const startIndex = props.dayIndex * 8
        const endIndex = (props.dayIndex + 1) * 8 - 1;

        if (data.list && data.list.length > 0) {
            data.list.forEach((sample, index) => {
              if (index < startIndex || index > endIndex) return;
              const d = new Date(sample.dt * 1000);
              temp_min_f.push(sample.main.temp_min * 9/5 + 32);
              temp_max_f.push(sample.main.temp_max * 9/5 + 32);
              temp_min_c.push(sample.main.temp_min);
              temp_max_c.push(sample.main.temp_max);
              humidity.push(sample.main.humidity);
              wind_speed.push(sample.wind.speed);
              temp_time.push(d.toLocaleTimeString());
            });
          }
        //console.log('Graph mounted')
        return {
            labels: temp_time,
            datasets: [
                {
                  data: props.settings.tempCelsius ? temp_min_c : temp_min_f,
                  borderColor: "blue",
                  fill: false,
                  label: props.settings.tempCelsius ? 'Temp Min (C)' : 'Temp Min (F)'
                },
                {
                  data: props.settings.tempCelsius ? temp_max_c : temp_max_f,
                  borderColor: "red",
                  fill: false,
                  label: props.settings.tempCelsius ? 'Temp Max (C)' : 'Temp Max (F)'
                },
                {
                  data: props.settings.displayHumidity ? humidity : [],
                  borderColor: "green",
                  fill: false,
                  label: 'Humidity (%)',
                  hidden: !props.settings.displayHumidity
                },
                {
                  data: props.settings.displayWind ? wind_speed : [],
                  borderColor: "purple",
                  fill: false,
                  label: 'Wind Speed (m/s)',
                  hidden: !props.settings.displayWind
                }
              ]
        };

    };

    // const options = {
    //     legend: { display: false }
    // }
    const options = {
        legend: { display: true },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return (
        <div>
            <h4>Hourly Temperature data</h4>
            {props.data &&
                <Line data={getData()}
                    options={options} />
            }
        </div >
    );
}
