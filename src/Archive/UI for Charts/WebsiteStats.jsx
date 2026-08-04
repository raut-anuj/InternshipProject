import React from "react";
import { Row, Col } from "react-bootstrap";
import StatsCard from "./StatsCard";
import StatsCardPlaceholder from "./StatsCardPlaceholder";
import useWebsiteStats from "../../api/useWebsiteStats";
import "./website_stats_card.css"

import {
  faClock,
  faLandmark,
  faPeopleLine,
  faSitemap,
  faUsers,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function WebsiteStats() {
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
  
  if (websiteStatsLoading) {
    const placeholders = Array.from({ length: stats.length});

    return (
      <div className="website-stats">
        <Row className="holder-row">
          {placeholders.map((_, index) => {
            const isLastSingle =
              placeholders.length % 2 !== 0 &&
              index === placeholders.length - 1;

            return (
              <Col
                key={index}
                xs={6}
                className={`d-flex justify-content-center ${
                  isLastSingle ? "mx-auto" : ""
                }`}
              >
                <StatsCardPlaceholder />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }

  return (
    <div className="website-stats">
      <Row className="holder-row">
        {stats.map((item, index) => {
          const isLastSingle =
            stats.length % 2 !== 0 &&
            index === stats.length - 1;

          return (
            <Col
              key={index}
              xs={6}
              className={`d-flex justify-content-center ${
                isLastSingle ? "mx-auto" : ""
              }`}
            >
              <StatsCard
                title={item.title}
                obj={item.obj}
                icon={item.icon}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}