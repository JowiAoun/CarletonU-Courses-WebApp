import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
Chart.defaults.font.size = 30;
Chart.defaults.color = "white";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Awesome", "Good", "Decent", "Meh", "Avoid"],
        datasets: [
          {
            label: "Ratings",
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 3,
            barThickness: 30,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        //this makes it horizontal
        indexAxis: "y",
        responsive: true,
        scales: {
          y: {
            ticks: { color: "white", beginAtZero: true },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas width="500" height="300" ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
