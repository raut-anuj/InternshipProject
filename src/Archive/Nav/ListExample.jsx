import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import LineChart from "../ApacheCharts/LineChart";
import BarChart from "../ApacheCharts/BarChart";
import PieChart from "../ApacheCharts/PieChart";

export default function ListExample() {
  const [chart, setChart] = useState("pie");

  return (
    <>
      <div className="d-flex justify-content-center">
        <Tabs
          activeKey={chart}
          onSelect={(k) => setChart(k)}
          id="chart-tabs"
          className="mb-3"
        >
          <Tab eventKey="pie" title="Pie Chart" />
          <Tab eventKey="line" title="Line Chart" />
          <Tab eventKey="bar" title="Bar Chart" />
        </Tabs>
      </div>

      {chart === "line" && <LineChart />}
      {chart === "bar" && <BarChart />}
      {chart === "pie" && <PieChart />}
    </>
  );
}