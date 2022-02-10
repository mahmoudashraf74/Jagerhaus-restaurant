import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Promo from "../../../../Assist/images/logo/pizza-3.png";

import "./Landing2.css";

const Landing2 = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col sm={6} className="title-area">
            <h3>best in town</h3>
            <h2>
              Delicious<span> Pizza</span> Enjoy your Favourite pizza
            </h2>
            <h5>Sea ranch Pizza</h5>
            <div className="order-box d-flex align-items-center">
              <a href="#a" className="btn">
                Order Now
              </a>
              <h5>
                price: <span>$10.50</span>
              </h5>
            </div>
          </Col>
          <Col sm={6}>
            <img src={Promo} alt="Burger" className="sec-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing2;
