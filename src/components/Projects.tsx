/* eslint-disable array-callback-return */
import "../styles/style.scss";

import Down from "@mui/icons-material/KeyboardArrowDownRounded";
import More from "@mui/icons-material/KeyboardArrowRight";
import Up from "@mui/icons-material/KeyboardArrowUpRounded";
import { IconButton } from "@mui/material";

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
          backgroundColor: "#ffffff50",
          cursor: "pointer",
          pointerEvents: "auto",
        }}
      >
        <More style={{ color: "white" }}></More>
      </div>
    </a>,
  ];

  return (
    <div className="main-container" id="6">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <Up></Up>
        </IconButton>
      </div>
      <div className="component-container" id="6" onClick={down}>
        {cardsArray}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <Down></Down>
        </IconButton>
      </div>
    </div>
  );
};

export default Projects;
