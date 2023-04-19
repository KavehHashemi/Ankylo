/* eslint-disable array-callback-return */
import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

import arrowdown from "../assets/arrowdown.svg";
import arrowup from "../assets/arrowup.svg";
import more from "../assets/more.svg";
import data from "../data/projects.json";
import Project from "./Project";

type props = {
  up: () => void;
  down: () => void;
};
const Projects = ({ up, down }: props) => {
  let cardsArray: JSX.Element[] = [];

  data.projects.map((p, i) => {
    cardsArray = [
      ...cardsArray,
      <Project
        key={i}
        name={p.name}
        description={p.description}
        tech={p.tech}
        url={p.url}
        github={p.github}
        personal={p.ispersonal === "true" ? true : false}
      ></Project>,
    ];
  });

  cardsArray = [
    ...cardsArray,
    <a
      id="more"
      key={1000}
      href="https://www.github.com/kavehhashemi"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem",
          padding: "1rem",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          cursor: "pointer",
          pointerEvents: "auto",
        }}
      >
        <img src={more} width={24}></img>
      </div>
    </a>,
  ];

  return (
    <div className="main-container" id="6">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <img width={24} src={arrowup}></img>
        </IconButton>
      </div>
      <div className="component-container" id="6" onClick={down}>
        {cardsArray}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src={arrowdown}></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Projects;
