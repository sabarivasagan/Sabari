import React from "react";
import "./styles.css";
import { Header } from "./Pages/Header";
import { Slider } from "./Pages/Slider";
import { PersonalSkills } from "./Pages/PersonalSkills";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <PersonalSkills />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
