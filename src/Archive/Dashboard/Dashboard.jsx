import { Stack } from "react-bootstrap";
import NestedPieChart from "../ApacheCharts/NestedPieChart";
import WebsiteStats from "../UI/WebsiteStats";

export default function Dashboard() {
  return (
    <Stack direction="horizontal" gap={4} className="align-items-start">

      {/* Left Side */}
      <Stack gap={3} className="">
        <NestedPieChart />
        <NestedPieChart />
      </Stack>

      {/* Right Side */}
      <div>
        <WebsiteStats />
      </div>

    </Stack>
  );
}