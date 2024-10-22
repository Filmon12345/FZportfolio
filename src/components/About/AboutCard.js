import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote p-0 mb-0">
          <p style={{ textAlign: "left" }}>
            Hello, I am <span className="purple">Filmon Zinabu </span>
            from Addis Ababa, Ethiopia.
            <br/>
            I recently graduated from Arbaminch University with a
            degree in Electrical and computer Engineering, specializing in
            Computer Engineering.<br/> During my time at the University, I developed
            a strong foundation in both hardware and software aspects of
            engineering. I have completed My Internship Time in{" "}
            <span className="purple">FrontEnd and Backend</span> WEB Development
            at Dan Energy PLC.
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
            "I may not be better than other people, but at least i'm Different
            !!!"{" "}
          </p>
          <footer className="blockquote-footer">Jean-Jacques Roussseau</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
