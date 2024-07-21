import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Philimona </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I recently graduated from <span className="purple"> Arbaminch University.</span> with a degree in Electrical
            and computer Engineering, specializing in <span className="purple"> Computer Engineering </span>. During my time at the University ,
            I developed a strong foundation in both hardware and software aspects of engineering
            <br />
            I have completed My Internship Time 
            in <span className="purple">FrontEnd and Backend</span> WEB Development at 
            Dan Energy PLC.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Spiritual Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in voluntary activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I may not be better than other people,
            but at least i'm Different !!!"{" "}
          </p>
          <footer className="blockquote-footer">Jean-Jacques Roussseau</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
