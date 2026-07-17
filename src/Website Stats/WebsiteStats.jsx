import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StatsCard from "./StatsCard";
import StatsCardPlaceholder from "../shared_components/utilities/StatsCardPlaceholder";
import useWebsiteStats from "../../hooks/queries/website_stats/useWebsiteStats";
import {
  faClock,
  faLandmark,
  faPeopleLine,
  faSitemap,
  faUsers,
  faVideo,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function WebsiteStats() {
  
  // Flexible from 1 to N
  const numberOfCards = 6;

  const { data: websiteStatsData, isLoading: websiteStatsLoading } = useWebsiteStats();

  if (websiteStatsLoading) {
    return (
      <div className="website-stats">
        <Row className="holder-row placeholder-row justify-content-center">
          {Array.from({ length: numberOfCards }).map((_, index) => (
            <Col
              key={`stats-placeholder-${index}`}
              xs="auto"
              className="placeholder-col d-flex justify-content-center"
            >
              <StatsCardPlaceholder />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  const getVal = (prop) =>
    websiteStatsData?.find((item) => item.property === prop);

  return (
    <div className="website-stats">
      <Row className="website-stats holder-row placeholder-row justify-content-center">
        <Col
          xs="auto"
          className="placeholder-col d-flex justify-content-center"
        >
          <StatsCard
            title="Platform Users"
            obj={getVal("active_user_count")}
            icon={faUsers}
          />
        </Col>

        <Col
          xs="auto"
          className="placeholder-col d-flex justify-content-center"
        >
          <StatsCard
            title="Ministries"
            obj={getVal("ministry_count")}
            icon={faLandmark}
          />
        </Col>

        <Col
          xs="auto"
          className="placeholder-col d-flex justify-content-center"
        >
          <StatsCard
            title="Organizations"
            obj={getVal("organization_count")}
            icon={faSitemap}
          />
        </Col>

        <Col
          xs="auto"
          className="placeholder-col d-flex justify-content-center"
        >
          <StatsCard
            title="Meetings Hosted"
            obj={getVal("total_meetings")}
            icon={faHandshake}
          />
        </Col>

        <Col
          xs="auto"
          className="placeholder-col d-flex justify-content-center"
        >
          <StatsCard
            title="Conference Hours"
            obj={getVal("total_duration")}
            icon={faClock}
          />
        </Col>

        <Col
          xs="auto"
          className="placeholder-col d-flex justify-content-center"
        >
          <StatsCard
            title="Participants Connected"
            obj={getVal("meeting_attendees_count")}
            icon={faPeopleLine}
          />
        </Col>
      </Row>
    </div>
  );
}
