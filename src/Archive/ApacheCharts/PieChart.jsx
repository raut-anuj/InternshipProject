import ReactECharts from "echarts-for-react";

export default function PieChart() {
  const option = {
    title: {
      text: "Students Performance",
    },

    tooltip: {},

    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },

    yAxis: {},

    series: [
      {
        name: "Students",
        type: "pie",
        data: [200, 600, 500, 373, 800],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px", width: "100%" }}
    />
  );
}