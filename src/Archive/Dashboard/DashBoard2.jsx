import { Stack } from "react-bootstrap";
import NestedPieChart from "../ApacheCharts/NestedPieChart";

export default function Dashboard1() {
  return (
    <Stack direction="horizontal" gap={5} className="justify-content-center">
      <div className=""><NestedPieChart/></div>
      <div className=""><NestedPieChart/></div>
    </Stack>
  );
}