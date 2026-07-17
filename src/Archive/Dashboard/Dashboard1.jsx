import { Stack } from "react-bootstrap";
import NestedPieChart from "../ApacheCharts/NestedPieChart";
import WebsiteStats from "../UI/WebsiteStats";

export default function Dashboard1() {
  return (
    <Stack direction="horizontal" gap={4} className="align-items-start">

      <Stack gap={3} className="">
        <NestedPieChart />
        <NestedPieChart />
      </Stack>

      <div>
        <WebsiteStats />
      </div>

    </Stack>
  );
}