import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import {
  FaComments,
  FaVideo,
  FaUpload,
  FaFileAlt,
  FaDoorOpen,
  FaPoll,
  FaDesktop,
  FaChalkboardTeacher,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

import "./StatsSection.css";

const stats = [
  { icon: <FaComments />, title: "Public/Private Chat" },
  { icon: <FaVideo />, title: "HD Videoconferencing" },
  { icon: <FaUpload />, title: "Upload Presentations" },
  { icon: <FaFileAlt />, title: "Live MoM" },
  { icon: <FaDoorOpen />, title: "Breakout Rooms" },
  { icon: <FaPoll />, title: "Real Time Polling" },

  // { icon: <FaDesktop />, title: "Multi Level Screen Sharing" },
  // { icon: <FaChalkboardTeacher />, title: "Multi User Whiteboard" },
  // { icon: <FaUsers />, title: "Multi User Management" },
  // { icon: <FaShieldAlt />, title: "Enterprise Security" },
];

export default function StatsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="stats-section">
      <Container>
        {/* <div className="heading">
          <h1>
            Made in India.
            <br />
            Made for the World.
          </h1>

          <div className="green-line"></div>
        </div> */}

        <Row className="justify-content-center g-0 mb-5">
          {loading
            ? Array.from({ length: stats.slice(0, 4).length }).map(
                (_, index) => (
                  <Col lg={3} md={6} sm={6} xs={6} key={index}>
                    <Skeleton />
                  </Col>
                ),
              )
            : stats.slice(0, 4).map((item, index) => (
                <Col lg={3} md={6} sm={6} xs={6} key={index}>
                  <div
                    className={`stat-card ${
                      index !== stats.slice(0, 4).length - 1 ? "divider" : ""
                    }`}
                  >
                    <div className="stat-icon">{item.icon}</div>
                    <p>{item.title}</p>
                  </div>
                </Col>
              ))}
        </Row>

        {/* Sirf yaha change hai */}
        {stats.slice(4).length > 0 && (
          <Row className="justify-content-center g-0">
            {loading
              ? Array.from({ length: stats.slice(4).length }).map(
                  (_, index) => (
                    <Col lg={3} md={6} sm={6} xs={6} key={index}>
                      <Skeleton />
                    </Col>
                  ),
                )
              : stats.slice(4).map((item, index) => (
                  <Col lg={3} md={6} sm={6} xs={6} key={index}>
                    <div
                      className={`stat-card ${
                        index !== stats.slice(4).length - 1 ? "divider" : ""
                      }`}
                    >
                      <div className="stat-icon">{item.icon}</div>
                      <p>{item.title}</p>
                    </div>
                  </Col>
                ))}
          </Row>
        )}
      </Container>
    </section>
  );
}