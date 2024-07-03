import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function LearningCards(props) {
  return (
    <Card className="project-card-view">
      <Link
        to={`/learning/learningIdx/${props.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Link>
      <div className="button-group">
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ margin: "10px" }}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ margin: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </div>
      <div className="last-updated">Last Updated {props.lastUpdated}</div>
      <style>{`
        .card-img {
          user-select: none;
        }
        .button-group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 10px;
        }
        .last-updated {
          margin-top: auto;
          text-align: center;
          font-family: Arial;
          color: white;
          background: transparent;
          border: none;
          font-size: 15px;
        }
      `}</style>
    </Card>
  );
}

export default LearningCards;
