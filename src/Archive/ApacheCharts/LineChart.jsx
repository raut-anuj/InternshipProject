import ReactECharts from "echarts-for-react";

export default function LineChart() {
  const option = {
    title: {
    },

    tooltip: {},

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },

    yAxis: {},

    series: [
      {
        name: "Students",
        type: "line",
        data: [200, 600, 500, 373, 800],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "400px" }}
    />
  );
}