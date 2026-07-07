import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./EnhancedSecurities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faEye,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Encrypted Channels",
    desc: "TLS v1.3 based encrypted HTTPS channels for secured transmissions of multiplexed data stream containing audio, video, screenshot etc.",
    icon: faShieldHalved,
  },
  {
    title: "Moderated Rooms",
    desc: "Invite driven videoconferencing rooms created and administered by the moderator. Privileges for various actions are granted by the moderator.",
    icon: faEye,
  },
  {
    title: "User Authentication",
    desc: "User ID and Password based user authentication before allowing anyone to setup a Video Conference and sharing invitations with other members.",
    icon: faUserLock,
  },
];

export default function EnhancedSecurities() {
  return (
    <section className="expressive-feature-section py-5">
      <Container>
        <h2 className="expressive-feature-title text-center mb-5">
          Enhanced Securities
        </h2>

        <div className="title-line"></div>

        <Row className="g-4 justify-content-center feature-row">
          {features.map((item, index) => (
            <Col lg={4} md={6} sm={12} xs={12} key={index}>
              <Card className="expressive-feature-card">
                <Card.Body className="text-center">
                  <FontAwesomeIcon icon={item.icon} className="feature-icon" />

                  <h3 className="feature-heading">{item.title}</h3>

                  <p className="feature-description">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
