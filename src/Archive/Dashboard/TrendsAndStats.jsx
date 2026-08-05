import { Stack } from "react-bootstrap";
import ListExample from "../Nav/ListExample"
import StatsTab from "../UI for Charts/StatsTab"
import "./TrendsAndStats.css"

export default function TrendAndStats() {
  return (
    <div>
      <h2 className="text-style">Platform Highlights</h2>
      <div className="separator"></div>

      <div className="dashboard-container">
        <div className="chart-section">
          <UsageTrend />
        </div>

        <div className="stats-section">
          <StatsTab />
        </div>
      </div>
    </div>
  );
}
