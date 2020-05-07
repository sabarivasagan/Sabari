import React from "react";
import { Navbar } from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Work from home</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
