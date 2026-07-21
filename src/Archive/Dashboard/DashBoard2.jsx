import { Stack } from "react-bootstrap";
import Chart from "../ApacheCharts/Chart";

export default function Dashboard2() {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="justify-content-center flex-wrap"
    >
      <div
        style={{
          width: "600px",
          height: "500px",
        }}
      >
        <Chart />
      </div>
      <div
        style={{
          width: "600px",
          height: "500px",
        }}
      >
        <Chart />
      </div>
    </Stack>
  );
}
