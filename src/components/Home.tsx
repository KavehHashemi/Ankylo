import "../styles/style.scss";

import { useState } from "react";

import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import ID from "./ID";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState<number>(1);

  const goUp = () => {
    if (currentComponent !== 1) {
      const el = document.getElementById((currentComponent - 1).toString());
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setCurrentComponent(currentComponent - 1);
    }
  };

  const goDown = () => {
    if (currentComponent === 7) {
      const el = document.getElementById("1");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setCurrentComponent(1);
    } else {
      const el = document.getElementById((currentComponent + 1).toString());
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setCurrentComponent(currentComponent + 1);
    }
  };

  document.body.onkeydown = (e) => {
    if (e.code === "ArrowUp" || e.code === "Space") {
      goUp();
    } else if (e.code === "ArrowDown" || e.code === "Backspace") {
      goDown();
    }
  };

  return (
    <div className="bg">
      <ID down={goDown}></ID>
      <Summary up={goUp} down={goDown}></Summary>
      <Experience up={goUp} down={goDown}></Experience>
      <Skills up={goUp} down={goDown}></Skills>
      <Education up={goUp} down={goDown}></Education>
      <Projects up={goUp} down={goDown}></Projects>
      <Contact up={goUp} down={goDown}></Contact>
    </div>
  );
};

export default Home;
