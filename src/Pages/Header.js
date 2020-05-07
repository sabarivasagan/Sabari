import React from "react";
import { Navbar } from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Sabari vasagan</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
