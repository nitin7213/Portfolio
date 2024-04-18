import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bgremover from "../../Assets/Projects/bgremover.png";
import kuizzer from "../../Assets/Projects/kuizzer.png";
import testify from "../../Assets/Projects/testify.png";
import crud from "../../Assets/Projects/crud.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple"> Major </strong>Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgremover}
              title="BG Remover"
              description="A background remover website is a platform where users can upload images and easily remove the background from them."
              ghLink="https://github.com/bg-remover/Bg_remover"
              demoLink="https://bg-remover-3t5s.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testify}
              title="Testify"
              description="A comprehensive educational platform designed to empower learners of all levels to acquire new skills, expand their knowledge, and achieve their academic and professional goals."
              ghLink="https://github.com/nitin7213/Testify"
              demoLink="https://testify-gray.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kuizzer}
              title="Kuizzer"
              description="
              Kuizzer is a helping educational website for younger generations. As Kuizzers, they aim to assist students by providing solutions to various online courses offered by platforms like NPTEL, Coursera, LinkedIn Learning, Codechef, and more."
              liveLink="https://kuizzer.in/"
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "100px" }}>
        <h1 className="project-heading">
          Some<strong className="purple"> Minor </strong>learnings
        </h1>
        <p style={{ color: "white" }}>
          These are some minor works which I've worked on.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              title="CRUD Mongo"
              ghLink="https://github.com/nitin7213/CRUD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              title="URL Shortner"
              ghLink="https://github.com/nitin7213/Url-shortner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
