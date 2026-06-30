import { Row, Col } from "react-bootstrap";
import { useUsers } from "../hook/useUsers";
import SkeletonCard from "./SkeletonCard";
import CardData from "./CardData";
import "./reactquery2.css";

const SkeletonHolder = () => {
  const { data, isLoading, isError } = useUsers();

  const users = data?.data || [];

  if (isLoading) {
    return (
      <Row className="holder-row justify-content-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <Col
          key={index}
          xs={12}
          sm={6}
          lg={4}
          className="d-flex justify-content-center mb-4"
        >
          <SkeletonCard />
        </Col>
      ))}
    </Row>
    );
  }

  if (isError) return <p>Error loading data!</p>;

  const getVal = (prop) =>
    users.find((item) => item.property === prop);

  return (
    <Row className="justify-content-center g-4 holder-row">

      <Col
      xs={12}
      sm={6}
      lg={4}
      className="d-flex justify-content-center mb-4"
    >
        <CardData
          title="Active User Count"
          obj={getVal("active_user_count")}
        />
      </Col>

      <Col
  xs={12}
  sm={6}
  lg={4}
  className="d-flex justify-content-center mb-4"
>
        <CardData
          title="Ministry Count"
          obj={getVal("ministry_count")}
        />
      </Col>

      <Col
  xs={12}
  sm={6}
  lg={4}
  className="d-flex justify-content-center mb-4"
>
        <CardData
          title="Organization Count"
          obj={getVal("organization_count")}
        />
      </Col>

      <Col
  xs={12}
  sm={6}
  lg={4}
  className="d-flex justify-content-center mb-4"
>
        <CardData
          title="Total Meeting Attendees Count"
          obj={getVal("meeting_attendees_count")}
        />
      </Col>

      <Col
  xs={12}
  sm={6}
  lg={4}
  className="d-flex justify-content-center mb-4"
>
        <CardData
          title="Total Duration"
          obj={getVal("total_duration")}
        />
      </Col>

      <Col
  xs={12}
  sm={6}
  lg={4}
  className="d-flex justify-content-center mb-4"
>
        <CardData
          title="Total Meetings"
          obj={getVal("total_meetings")}
        />
      </Col>

    </Row>
  );
};

export default SkeletonHolder;