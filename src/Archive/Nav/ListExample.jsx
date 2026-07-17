import Nav from 'react-bootstrap/Nav';
import { useState } from "react";

import LineChart from "../ApacheCharts/LineChart";
import BarChart from "../ApacheCharts/BarChart";
import PieChart from "../ApacheCharts/PieChart";
import { NavItem, NavLink } from 'react-bootstrap';

export default function ListExample() {
  const [chart, setChart] = useState("pie");

  return (
    <>
      <Nav activeKey={chart}>
        <NavItem>
          <NavLink
          eventKey="pie"
          onClick={() => setChart("pie")}
          >
            Pie Chart
          </NavLink>
        </NavItem>

        <Nav.Item>
          <Nav.Link
            eventKey="line"
            onClick={() => setChart("line")}
          >
            Line Chart
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link
            eventKey="bar"
            onClick={() => setChart("bar")}
          >
            Bar Chart
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {chart === "line" && <LineChart />}
      {chart === "bar" && <BarChart />}
      {chart === "pie" && <PieChart />}
    </>
  );
}