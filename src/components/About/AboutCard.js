import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Animal</span>,
            a passionate Developer
            currently in <span className="purple"> USA</span>.
            
            <br />
            <br />
            Apart from coding, some other activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Playing Games
            </li>
          </ul>

          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
