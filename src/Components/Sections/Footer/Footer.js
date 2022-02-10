import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../../../Assist/images/logo/Jägerhaus.png";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer" id="contact">
      <Container>
        <Row className="Footer-content">
          <Col>
            <div className="Info">
              <img className="logo" src={logo} alt="Logo" />
              <h4>
                The food is always fresh, always fun, and there’s always
                something new! we’ve got it all – and with the whole menu
                available from open to close,
              </h4>
            </div>
            <Row>
              <div className="social-links " data-aos="fade-right">
                <a
                  href="https://twitter.com/Ashrof_74"
                  className="twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#face"
                  className="facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#insta"
                  className="instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </Row>
          </Col>
          <Col>
            <div className="footer-route" data-aos="fade-left">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="#.">
                    <FaChevronRight className="arrow" />
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a href="#about">
                    {" "}
                    <FaChevronRight className="arrow" />
                    About us
                  </a>
                </li>
                <li>
                  <a href="#services">
                    {" "}
                    <FaChevronRight className="arrow" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#services">
                    {" "}
                    <FaChevronRight className="arrow" />
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#services">
                    {" "}
                    <FaChevronRight className="arrow" />
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          {/********************** thired Col **********************/}

          {/********************** fourt Col **********************/}
          <Col>
            <div className="message" data-aos="fade-right">
              <h2> Have a question or want to work together?</h2>{" "}
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="You Message"
                  />
                </Form.Group>
                <Button
                  variant="light"
                  as="input"
                  type="submit"
                  value="Submit"
                  className="submit-btn"
                />{" "}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
