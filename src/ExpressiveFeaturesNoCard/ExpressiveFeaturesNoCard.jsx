import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faVideo,
  faUpload,
  faFileLines,
  faDoorOpen,
  faPoll,
  faDisplay,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  { text: "Public/Private Chat", icon: faComments },
  { text: "HD Videoconferencing", icon: faVideo },
  { text: "Upload Presentations", icon: faUpload },
  { text: "Live MoM", icon: faFileLines },
  { text: "Breakout Rooms", icon: faDoorOpen },
  { text: "Real Time Polling", icon: faPoll },
  { text: "Multi Level Screen Sharing", icon: faDisplay },
  { text: "Multi User Whiteboard", icon: faChalkboardUser },
  { text: "Multi User Whiteboard", icon: faChalkboardUser },
  { text: "Multi User Whiteboard", icon: faChalkboardUser },
  { text: "Multi User Whiteboard", icon: faChalkboardUser },
  { text: "Multi User Whiteboard", icon: faChalkboardUser },
];

export default function ExpressiveFeaturesNoCard() {
  return (
    <section className="expressive-feature-section pt-5 pb-6">
      <Container>
        <h2 className="expressive-feature-title text-center mb-5">
          Expressive Features No Card
        </h2>

        <div className="expressive-title-line"></div>

        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg={3} md={6} sm={6} xs={12} key={index}>
              <Card className="expressive-feature-card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="2x"
                    className="mb-3"
                  />

                  <h4 className="expressive-feature-text text-center mb-0">
                    {item.text}
                  </h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
