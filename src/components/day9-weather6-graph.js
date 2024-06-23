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
        const temp_min = [];
        const temp_max = [];
        const temp_time = [];
        // The required day index to display in the graph 
        const startIndex = props.dayIndex * 8
        const endIndex = (props.dayIndex + 1) * 8 - 1;
        if (data.list && data.list.length > 0) {
        data.list.forEach((sample, index) => {
            if (index < startIndex || index > endIndex) return;
            const d = new Date(sample.dt * 1000);
            //console.log(d)
            temp_min.push(sample.main.temp_min);
            temp_max.push(sample.main.temp_max);
            temp_time.push(d.toLocaleTimeString());
        });
        }
        //console.log('Graph mounted')
        return {
            labels: temp_time,
            datasets: [{
                data: temp_min,
                borderColor: "blue",
                fill: false
            }, {
                data: temp_max,
                borderColor: "red",
                fill: false
            }]
        }

    };

    const options = {
        legend: { display: false }
    }
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
