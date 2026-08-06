import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ApacheEchartHomepage from "./ApacheEchartHomepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

export default function UsageTrend() {
  const [chart, setChart] = useState("monthly-trend");

  const [monthlyMinistryUsage, setMonthlyMinistryUsage] = useState(null);
  const [yearlyMinistryUsage, setYearlyMinistryUsage] = useState(null);

  const [monthlyMinistryUsageLoading, setMonthlyLoading] = useState(true);
  const [yearlyMinistryUsageLoading, setYearlyLoading] = useState(true);

  useEffect(() => {
    fetch("/assets/monthlyMinistryUsage.json")
      .then((res) => res.json())
      .then((data) => {
        setMonthlyMinistryUsage(data);
        setMonthlyLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/assets/yearlyMinistryUsage.json")
      .then((res) => res.json())
      .then((data) => {
        setYearlyMinistryUsage(data);
        setYearlyLoading(false);
      });
  }, []);

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
          ministryUsage={monthlyMinistryUsage?.data?.data}
          period={monthlyMinistryUsage?.data?.period}
        />
      )}
      {chart === "yearly-trend" && (
        <ApacheEchartHomepage
          isLoading={yearlyMinistryUsageLoading}
          ministryUsage={yearlyMinistryUsage?.data?.data}
          period={yearlyMinistryUsage?.data?.period}
        />
      )}
    </>
  );
}
