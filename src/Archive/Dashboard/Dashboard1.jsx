import { Stack } from "react-bootstrap";
import NestedPieChart from "../ApacheCharts/NestedPieChart";
import WebsiteStats from "../UI/WebsiteStats";

export default function Dashboard1() {
  return (
    <Stack direction="horizontal" className="dashboard-container">
      <Stack direction="vertical" className="chart-section">
        <NestedPieChart />
        <NestedPieChart />
      </Stack>

      <div className="stats-section">
        <WebsiteStats />
      </div>
    </Stack>
  );
}