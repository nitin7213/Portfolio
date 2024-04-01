import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bgremover from "../../Assets/Projects/bgremover.png";
import testify from "../../Assets/Projects/testify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgremover}
              isBlog={false}
              title="BG Remover"
              description="A background remover website is a platform where users can upload images and easily remove the background from them."
              ghLink="https://github.com/bg-remover/Bg_remover"
              demoLink="https://bg-remover-3t5s.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testify}
              isBlog={false}
              title="Testify"
              description="A comprehensive educational platform designed to empower learners of all levels to acquire new skills, expand their knowledge, and achieve their academic and professional goals."
              ghLink="https://github.com/nitin7213/Testify"
              demoLink="https://testify-gray.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
