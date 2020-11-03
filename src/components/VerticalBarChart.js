import React from 'react';
import { Bar } from "@reactchartjs/react-chart.js";

const VerticalBarChart = ({labels, values, colors}) => {

    const data = {
      labels: labels,
      datasets: [
        {
          label: "No of Views",
          data: values,
          backgroundColor: colors,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
        <div style={{ width: "50%" }}>
          <h1 className="title">Products Statistics</h1>
          <Bar data={data} options={options} />
        </div>
      );
}

export default VerticalBarChart;