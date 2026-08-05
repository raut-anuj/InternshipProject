import { Stack } from "react-bootstrap";
import ListExample from "../Nav/ListExample"
import WebsiteStats from "../UI for Charts/WebsiteStats";
import "./TrendsAndStats.css"

export default function TrendsAndStats() {
  return (
    <div className="dashboard-container">
  <div className="chart-section">
    <ListExample />
  </div>

  <div className="stats-section">
    <WebsiteStats />
  </div>
</div>
  );
}