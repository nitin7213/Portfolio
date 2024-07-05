import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import learningDetails from "../../../Assets/Api/learningDetails";

function LearningPage() {
  const { id, fileName } = useParams();
  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const learning = learningDetails.find((learning) => learning.id === id);

  useEffect(() => {
    if (!learning) {
      setError("Learning project not found");
      setLoading(false);
      return;
    }

    const fetchFileContent = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/nitin7213/${learning.title}/contents/${fileName}`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const content = atob(response.data.content);
        setFileContent(content);
      } catch (err) {
        setError("Error fetching file content");
        console.error("Error fetching file content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFileContent();
  }, [learning, fileName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container fluid className="project-section">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item ">
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
              <Link
                to={`/learning/learningIdx/${id}`}
                style={{ color: "#cdc5c5", textDecoration: "none" }}
              >
                {learning.title}/{" "}
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              style={{ color: "white" }}
              aria-current="page"
            >
              {fileName}
            </li>
          </ol>
        </nav>
      </Container>{" "}
      <Container>
        <div className="project-header">
          <h1 className="project-heading">{fileName}</h1>
        </div>{" "}
        <Row style={{ marginBottom: "20vh" }}>
          <pre style={{ color: "white", textAlign: "left" }}>{fileContent}</pre>
        </Row>
      </Container>{" "}
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

        @media (max-width: 768px) {
          .project-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .project-heading {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 576px) {
          .project-section {
            padding: 10px;
          }

          .breadcrumb {
            font-size: 14px;
          }
        }
      `}</style>
    </Container>
  );
}

export default LearningPage;
