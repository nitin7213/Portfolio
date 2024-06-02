import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectDetails from "../../Assets/Api/projectDetails"; // Assuming the file containing projectDetails is in the same directory

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
          {projectDetails
            .filter((project) => project.category === "major")
            .map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                  id={project.id}
                  imgPath={require(`../../Assets/Projects/${project.imgPath}`)}
                  title={project.title}
                  description={project.about}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  lastUpdated={project.lastUpdated}
                  liveLink={project.liveLink}
                />
              </Col>
            ))}
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
          {projectDetails
            .filter((project) => project.category === "minor")
            .map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                  id={project.id}
                  imgPath={require(`../../Assets/Projects/${project.imgPath}`)}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  lastUpdated={project.lastUpdated}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
