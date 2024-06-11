import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import projectDetails from "../../../Assets/Api/projectDetails";
import { Link } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();

  // Find the project with the matching ID
  const project = projectDetails.find((project) => project.id === id);

  // If project is not found, return a not found message
  if (!project) {
    return (
      <div className="d-flex flex-column vh-100">
        <Container fluid className="project-section">
          <Container>
            <div className="project-header">
              <h1 className="project-heading">Project Not Found</h1>
              <p style={{ color: "white" }}>
                The project you're looking for does not exist.
              </p>
            </div>
          </Container>
        </Container>
      </div>
    );
  }

  const imgsrc = (
    <img
      src={require(`../../../Assets/Projects/${project.imgPath}`)}
      alt="img"
      className="project-image"
    />
  );

  return (
    <div className="d-flex flex-column vh-100">
      <Container fluid className="project-section">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item ">
                <Link
                  to="/project"
                  style={{ color: "#cdc5c5", textDecoration: "none" }}
                >
                  Projects
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                style={{ color: "white" }}
                aria-current="page"
              >
                {project.title}
              </li>
            </ol>
          </nav>
        </Container>
        <Container>
          <div className="project-header">
            <h1 className="project-heading">{project.title}</h1>
            <p className="project-updated">
              <strong className="purple">Last Updated: </strong>
              {project.lastUpdated}
            </p>
          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12}>
              <Row>
                <Col md={8} xs={12}>
                  <p style={{ color: "white", textAlign: "left" }}>
                    <strong className="purple">STATUS: </strong>
                    {project.status}
                  </p>
                  <p style={{ color: "white", textAlign: "left" }}>
                    <strong className="purple">DESCRIPTION </strong> <br />
                    {project.description}
                  </p>{" "}
                  <p style={{ color: "white", textAlign: "left" }}>
                    <strong className="purple">PURPOSE</strong> <br />
                    {project.ideology}
                  </p>
                  <p style={{ color: "white", textAlign: "left" }}>
                    <strong className="purple">TECHNOLOGIES</strong> <br />
                    {project.technologies.join(", ")}
                  </p>
                  <p style={{ color: "white", textAlign: "left" }}>
                    <strong className="purple">CONTRIBUTORS</strong> <br />
                    {project.contributors.map((contributor) => (
                      <span key={contributor.githubUsername}>
                        <a
                          href={`https://github.com/${contributor.githubUsername}`}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {contributor.name}
                        </a>
                        {project.contributors.indexOf(contributor) !==
                          project.contributors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <div className="button-group">
                    {project.ghLink && (
                      <Button
                        variant="primary"
                        as="a" // Use "as" prop to render as anchor tag
                        href={project.ghLink}
                        target="_blank"
                        style={{ margin: "10px" }}
                      >
                        <BsGithub /> &nbsp; GitHub
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button
                        variant="primary"
                        as="a" // Use "as" prop to render as anchor tag
                        href={project.demoLink}
                        target="_blank"
                        style={{ margin: "10px" }}
                      >
                        <CgWebsite /> &nbsp; Demo
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        variant="warning"
                        href={project.liveLink}
                        target="_blank"
                        style={{ margin: "10px" }}
                      >
                        <CgWebsite /> &nbsp; Live
                      </Button>
                    )}
                  </div>
                </Col>
                <Col md={4} xs={12} className="hero-img">
                  {imgsrc}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <style>{`
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .project-heading {
          margin: 0;
          color: white;
        }
        .project-updated {
          margin: 0;
          color: white;
        }
        .button-group {
          display: flex;
          justify-content: center;
         
          flex-wrap: wrap;
          padding: 10px;
        }
        .project-image {
          height: auto; /* Maintain the aspect ratio */
          width: 100%; /* Default size */
        }
        
        @media (min-width: 768px) {
          .project-image {
            width: 100%; /* Adjust the size for medium screens */
          }
        }
        
        @media (min-width: 1024px) {
          .project-image {
            width: 100%; /* Adjust the size for large screens */
          }
        }
        .row {
          align-items: center;
        }
        
        a {
          transition: color 0.3s ease; /* Add transition effect */
        }
        
        a:hover {
          color: #00a0ff !important; /* Change color on hover */
        } 
      `}</style>
    </div>
  );
}

export default ProjectPage;
