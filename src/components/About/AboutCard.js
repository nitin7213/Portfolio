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

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love consistency, start from loved work!"{" "}
          </p>
          <footer className="blockquote-footer">Nitin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
