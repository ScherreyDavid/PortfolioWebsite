import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am deeply passionate about cloud computing, specifically with <b className="purple"> Amazon Web Services (AWS) </b> and <b className="purple"> Microsoft Azure. </b> I enjoy constantly learning and expanding my knowledge in this field.
              <br />
              <br />My expertise lies in utilizing cloud platforms to
              <i>
            <b className="purple"> improve system scalability, reliability, and security. </b> I am particularly interested in developing new solutions and architectures that leverage the full capabilities of these cloud platforms.{" "}
              </i>
              <br />
              <br />
              My field of interests are building new
              <i>
                <b className="purple"> Web Technologies and Products </b> in areas related to{" "}
                <b className="purple">
                  Deep Learning and Cloud Computing.
                </b>
              </i>
              <br />
              <br />
              I am dedicated to constantly learning and enhancing my skills in these areas, and I am excited about the <b className="purple"> endless possibilities </b> that cloud computing presents for
              <i>
                <b className="purple">
                  {" "}
                  innovation and progress in the technology industry.
                </b>
              </i>
            </p>
          </Col>
      
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ScherreyDavid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/david-scherrey-iii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
