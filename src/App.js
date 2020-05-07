import React from "react";
import "./styles.css";
import { Button } from 'react-bootstrap';

class Header extends React.Component
{
  render()
  {
    return (
      <div>
        <Button variant="primary">Primary</Button>
    </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
