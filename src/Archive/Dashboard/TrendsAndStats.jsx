import { Stack } from "react-bootstrap";
import ListExample from "../Nav/ListExample"
import StatsTab from "../UI for Charts/StatsTab"
import "./TrendsAndStats.css"

export default function TrendsAndStats() {
  return (
    <div className="dashboard-container">
  <div className="chart-section">
    <ListExample />
  </div>

  <div className="stats-section">
    <StatsTab />
  </div>
</div>
  );
}