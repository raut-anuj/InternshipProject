import React from "react";
import { Row, Col } from "react-bootstrap";
import StatsCard from "./StatsCard";
import StatsCardPlaceholder from "./StatsCardPlaceholder";
import useWebsiteStats from "../../api/useWebsiteStats";
import "./stats_tab.css"
import {
  faClock,
  faLandmark,
  faPeopleLine,
  faSitemap,
  faUsers,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function StatsTab() {
  const { data: websiteStatsData, isLoading: websiteStatsLoading } =
    useWebsiteStats();

  const getVal = (prop) =>
    websiteStatsData?.find((item) => item.property === prop);

  const stats = [
    {
      title: "Platform Users",
      obj: getVal("active_user_count"),
      icon: faUsers,
    },
    {
      title: "Ministries",
      obj: getVal("ministry_count"),
      icon: faLandmark,
    },
    {
      title: "Organizations",
      obj: getVal("organization_count"),
      icon: faSitemap,
    },
    {
      title: "Meetings Hosted",
      obj: getVal("total_meetings"),
      icon: faHandshake,
    },
    {
      title: "Conference Hours",
      obj: getVal("total_duration"),
      icon: faClock,
    },
    {
      title: "Participants Connection",
      obj: getVal("meeting_attendees_count"),
      icon: faPeopleLine,
    },
  ];

  const items = websiteStatsLoading
    ? Array.from({ length: stats.length })
    : stats;

  return (
    <div className="stats-tab">
      <Row className="holder-row">
        {items.map((item, index) => {
          const isLastSingle =
            items.length % 2 !== 0 && index === items.length - 1;

          return (
            <Col
              key={index}
              xs={6}
              className={`d-flex justify-content-center ${
                isLastSingle ? "mx-auto" : ""
              }`}
            >
              {websiteStatsLoading ? (
                <StatsCardPlaceholder />
              ) : (
                <StatsCard
                  title={item?.title}
                  obj={item?.obj}
                  icon={item?.icon}
                />
              )}
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
