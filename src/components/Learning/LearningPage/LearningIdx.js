import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import learningDetails from "../../../Assets/Api/learningDetails";
import ContentLoader from "react-content-loader";

const LearningIdx = () => {
  const [gitContent, setGitContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // Find the project with the matching ID
  const learning = learningDetails.find((learning) => learning.id === id);

  useEffect(() => {
    if (!learning) {
      setError("Learning project not found");
      setLoading(false);
      return;
    }

    const fetchGitContent = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/nitin7213/${learning.title}/contents/`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const jsFiles = response.data
          .filter((file) => file.name.endsWith(".js"))
          .map((file) => file.name);
        setGitContent(jsFiles);
      } catch (err) {
        setError("Error fetching Git content");
        console.error("Error fetching Git content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitContent();
  }, [learning]);

  if (loading) {
    return (
      <Container
        fluid
        className="project-section mb-5"
        style={{ padding: "100px" }}
      >
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to="/learning"
                  style={{ color: "#cdc5c5", textDecoration: "none" }}
                >
                  Learnings /
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                style={{ color: "transparent", ariaCurrent: "page" }}
              >
                {learning ? learning.title : "Loading..."}
              </li>
            </ol>
          </nav>
        </Container>
        <div className="project-header" style={{ paddingBottom: "10vh" }}>
          <h1 className="project-heading">
            {learning ? learning.title : "Loading..."}
          </h1>
        </div>
        <Row style={{ marginBottom: "20vh" }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="project-card-view" style={{ cursor: "pointer" }}>
                <ContentLoader
                  speed={1}
                  height={80}
                  backgroundColor="transparent"
                  foregroundColor="#ecebeb"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="250" height="140" />
                </ContentLoader>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container fluid className="project-section" style={{ padding: "100px" }}>
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to="/learning"
                style={{ color: "#cdc5c5", textDecoration: "none" }}
              >
                Learnings /
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              style={{ color: "white" }}
              aria-current="page"
            >
              {learning.title}
            </li>
          </ol>
        </nav>
      </Container>
      <Container>
        <div className="project-header" style={{ paddingBottom: "10vh" }}>
          <h1 className="project-heading">{learning.title}</h1>
        </div>
        <Row style={{ marginBottom: "20vh" }}>
          {gitContent.map((fileName, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Link to={`/learningpage/${learning.id}/${fileName}`}>
                <Card
                  className="project-card-view"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body>
                    <Card.Title>{fileName}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <style>{`
        .breadcrumb-item a {
          transition: color 0.3s ease;
        }

        .breadcrumb-item a:hover {
          color: #00a0ff !important;
        }

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
      `}</style>
    </Container>
  );
};

export default LearningIdx;
