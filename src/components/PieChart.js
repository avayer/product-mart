import React from "react";
import { Pie } from "@reactchartjs/react-chart.js";

const PieChart = ({ labels, values, colors }) => {
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

  return (
    <div style={{ width: "50%" }}>
      <h1 className="title">Pie Chart</h1>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
