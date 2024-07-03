import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LearningCards from "./LearningCards";
import Particle from "../Particle";
import learningDetails from "../../Assets/Api/learningDetails";

export const Learning = () => {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My<strong className="purple"> Learnings </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are my few learnings I've worked on recently
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "20vh" }}>
            {learningDetails.map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <LearningCards
                  id={project.id}
                  imgPath={require(`../../Assets/Learnings/${project.imgPath}`)}
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
      </Container>
    </div>
  );
};
