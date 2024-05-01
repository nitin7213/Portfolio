import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitin Thakur </span>
            from <span className="purple"> Himachal Pradesh, India.</span>
            <br />
            I am currently pursuing my Btech at Chandigarh University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Speed Typing
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p className="purple">
            "Put <span style={{ color: "white" }}> consistency </span>in work,
            and see the <span style={{ color: "white" }}>MAGIC!"</span>{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "white" }}>
            NITIN
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
