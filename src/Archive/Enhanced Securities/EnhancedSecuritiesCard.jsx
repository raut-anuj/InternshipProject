import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faEye,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import "./EnhancedSecurities.css"


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

export default function EnhancedSecuritiesCard() {
  return (
    <div className="enhanced-securities-card">
      <section className="section">
        <Container>
          <h2 className="text-style text-center">
            Enhanced Securities
          </h2>

          <div className="separator"></div>

          <Row className="g-4 justify-content-center align-items-stretch">
            {features.map((item, index) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-center"
                key={index}
              >
                <Card className="card">
                  <Card.Body className="text-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="icon"
                    />

                    <h2 className="heading">
                      {item.title}
                    </h2>

                    <p className="description">
                      {item.desc}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
