import React from "react";
import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ApacheEchartHomepage from "../shared_components/utilities/ApacheEchartHomepage";
import useMonthlyMinistryUsage from "../../hooks/queries/ministry_usage/useMonthlyMinistryUsage";
import useYearlyMinistryUsage from "../../hooks/queries/ministry_usage/useYearlyMinistryUsage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

export default function UsageTrend() {
  const [chart, setChart] = useState("monthly-trend");

  const { data: monthlyMinistryUsage, isLoading: monthlyMinistryUsageLoading } = useMonthlyMinistryUsage();
  const { data: yearlyMinistryUsage, isLoading: yearlyMinistryUsageLoading } = useYearlyMinistryUsage();

  return (
    <>
      <div className="d-flex justify-content-center">
        <Tabs
          activeKey={chart}
          onSelect={(key) => setChart(key)}
          id="trend-chart-tabs"
          className="mb-3 trend-chart-tabs"
        >
          <Tab 
          eventKey="monthly-trend" 
          title={<span><FontAwesomeIcon icon={faCalendarDay} className="hi-s me-1" />{'Monthly Trend'}</span>}
           />
          <Tab 
          eventKey="yearly-trend" 
          title={<span><FontAwesomeIcon icon={faCalendarWeek} className="hi-s me-1" />{'Yearly Trend'}</span>}
          />
        </Tabs>
      </div>

      {chart === "monthly-trend" && (
        <ApacheEchartHomepage
          isLoading={monthlyMinistryUsageLoading}
          ministryUsage={monthlyMinistryUsage?.data}
          period={monthlyMinistryUsage?.period}
        />
      )}
      {chart === "yearly-trend" && (
        <ApacheEchartHomepage
          isLoading={yearlyMinistryUsageLoading}
          ministryUsage={yearlyMinistryUsage?.data}
          period={yearlyMinistryUsage?.period}
        />
      )}
    </>
  );
}
