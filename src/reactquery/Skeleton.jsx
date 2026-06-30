import { Row, Col } from "react-bootstrap";
import { useUsers } from "../hook/useUsers";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";
import "./reactquery.css";

const Skeleton = () => {
  const { data, isLoading, isError } = useUsers();

  const users = data?.data || [];

  const cards = [
    {
      title: "Active User Count",
      property: "active_user_count",
    },
    {
      title: "Ministry Count",
      property: "ministry_count",
    },
    {
      title: "Organization Count",
      property: "organization_count",
    },
    {
      title: "Meeting Attendees Count",
      property: "meeting_attendees_count",
    },
    {
      title: "Total Duration",
      property: "total_duration",
    },
    {
      title: "Total Meetings",
      property: "total_meetings",
    },
  ];

  const getVal = (prop) =>
    users.find((item) => item.property === prop);

  // ---------------- Loading ----------------

  if (isLoading) {
    return (
      <Row className="justify-content-center align-items-center stats-row g-0">
        {cards.map((_, index) => (
          <Col key={index} xs="auto">
            <SkeletonCard />
          </Col>
        ))}
      </Row>
    );
  }

  if (isError) return <p>Error loading data!</p>;

  // ---------------- Actual Cards ----------------

  return (
    <Row className="justify-content-center align-items-center stats-row g-0">
      {cards.map((item, index) => (
        <Col
          key={item.property}
          xs="auto"
          className="d-flex align-items-center"
        >
          <Card
            title={item.title}
            obj={getVal(item.property)}
          />

          {index !== cards.length - 1 && (
            <div className="stats-divider"></div>
          )}
        </Col>
      ))}
    </Row>
  );
};

export default Skeleton;