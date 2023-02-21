import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Waterworks chart",
    },
  },
};

const rgbColors = [
  "rgb(144, 238, 144)",
  "rgb(203, 195, 227)",
  "rgb(255, 0, 0)",
  "rgb(0,255,255)",
];

const ChartPrint = ({ data }) => {
  if (data != null) {
    const labels = [];
    const datasets = [];

    for (let i = 0; i < data[0].length; i++) {
      const timestampString = data[0][i].TimeStamp;
      const regex = /-?\d+/;
      const timestamp = parseInt(timestampString.match(regex)[0]);
      const date = new Date(timestamp);
      const dateString = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      labels.push(dateString);
    }

    for (let i = 0; i < data.length; i++) {
      const dataResult = [];

      data[i].forEach((e) => {
        dataResult.push(e.Value);
      });

      const datasetTemplate = {
        label: `Nivå ${i + 1}`,
        data: dataResult,
        borderColor: rgbColors[i],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      };
      datasets.push(datasetTemplate);
    }

    const chartData = {
      labels: labels,
      datasets: datasets,
    };

    return (
      <div className="App">
        <Line options={options} data={chartData} />
      </div>
    );
  }
};

export default ChartPrint;
