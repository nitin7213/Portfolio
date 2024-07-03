import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const LearningIdx = () => {
  const [gitContent, setGitContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const repo = id === "1" ? "node-js" : "react-js";

  useEffect(() => {
    const fetchGitContent = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/nitin7213/${repo}/contents/`
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
  }, [repo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container fluid className="project-section" style={{ padding: "100px" }}>
      {" "}
      <div className="project-header" style={{ paddingBottom: "10vh" }}>
        <h1 className="project-heading">{repo}</h1>
      </div>
      <Row style={{ marginBottom: "20vh" }}>
        {gitContent.map((fileName, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="project-card-view" style={{ cursor: "pointer" }}>
              <Card.Body>
                <Card.Title>{fileName}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LearningIdx;
