import ReactECharts from "echarts-for-react";

export default function BarChart() {
  const option = {
    title: {
    },

    tooltip: {},

    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },

    yAxis: {},

    series: [
      {
        name: "Students",
        type: "bar",
        data: [200, 600, 500, 373, 800],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "400px", }}
    />
  );
}