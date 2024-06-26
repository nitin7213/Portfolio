import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Instagram from "./Instagram";
import { AiFillInstagram } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Github />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Row>
          <h1
            className="project-heading"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            <AiFillInstagram className="fs-1" />{" "}
            <strong className="purple">Basketball</strong> Content Creator
          </h1>

          <p
            style={{
              justifyContent: "center",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Apart from coding, this is my{" "}
            <span className="purple">Instagram </span>
            channel <span className="purple"> @hoopinshark </span>I post
            Basketball related content. Some of my viral contents:
          </p>
          <div className="instagram-container">
            <Instagram url="https://www.instagram.com/reel/C3uelmRxvmW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            <Instagram url="https://www.instagram.com/reel/C1XHwKKiSmq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            <Instagram url="https://www.instagram.com/reel/C4pFvs6C4on/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            <Instagram url="https://www.instagram.com/reel/C4miY9ECMy5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            <Instagram url="https://www.instagram.com/reel/C5pgY6GCyb0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            <Instagram url="https://www.instagram.com/reel/C5VUbLTrb4Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
          </div>
        </Row>
      </Container>
      <style>{`
        .instagram-container {
          display: grid;
          margin-top:30px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 5fr)); /* Responsive grid layout */
          gap: 100px; /* Gap between grid items */
          justify-items: center; /* Center items horizontally */
          justify-content: center; /* Center the grid items horizontally */
          margin-bottom: 20px;
        }
      `}</style>
    </Container>
  );
}

export default About;
