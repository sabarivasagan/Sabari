import React from "react";
import { Card } from "react-bootstrap";
import "../css/style.css";

export class PersonalSkills extends React.Component {
  render() {
    return (
      <div className="personal-details-marigin">
        <center>
          <Card body>
            <h3>Personal Skills</h3>
            <p>
              Ability to work individually and in group, hunting nature to
              identify the problem in payments, interested to learn new
              technologies and apply. Pleasant personality with good
              communication, dealing effectively with multicultural environment
              Highly trainable, Flexible, Fast learner who can adapt quickly to
              changes and thrive in high-pressure, challenging work environments
            </p>
          </Card>
        </center>
      </div>
    );
  }
}
