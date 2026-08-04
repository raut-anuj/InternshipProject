import ReactECharts from "echarts-for-react";

export default function PieChart() {
  const option = {
    title: {
    },

    tooltip: {},

    legend: {
      bottom: 0,
    },

    series: [
      {
        name: "Students",
        type: "pie",
        radius: "65%",
        center: ["50%", "55%"],
        data: [
          { value: 200, name: "A" },
          { value: 600, name: "B" },
          { value: 500, name: "C" },
          { value: 373, name: "D" },
          { value: 800, name: "E" },
        ],
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