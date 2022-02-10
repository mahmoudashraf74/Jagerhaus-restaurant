import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadPart from "./HeadPart";
import part1 from "../../../Assist/images/Food/fastfood1.jpg";
import "./Section1.css";
const Section1 = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col sm={8}>
            <img src={part1} alt="pic1" className="sec-img" />
          </Col>
          <Col sm={4} className="sec-text">
            {" "}
            <HeadPart heading="Our Food" />
            <p>
              Our food roots are colourful, global and eclectic with a gourmet,
              playful edge. We get inspired by flavours and ingredients from all
              four corners of the world and put our signature ‘wild’ twist to
              them. Our aim is to provide a little vision on how food could be
              if we just imagined so!
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="sec-text">
            {" "}
            <HeadPart heading="Organic" />
            <p>
              Our food roots are colourful, global and eclectic with a gourmet,
              playful edge. We get inspired by flavours and ingredients from all
              four corners of the world and put our signature ‘wild’ twist to
              them. Our aim is to provide a little vision on how food could be
              if we just imagined so!
            </p>
          </Col>
          <Col sm={8}>
            <img src={part1} alt="pic1" className="sec-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
