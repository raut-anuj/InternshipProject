import { Stack } from "react-bootstrap";
import ListExample from "../Nav/ListExample"
import WebsiteStats from "../UI/WebsiteStats";
import "../UI/website_stats_card.css"
import "./Dashboard1.css"

export default function Dashboard1() {
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