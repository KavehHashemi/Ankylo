/* eslint-disable array-callback-return */
import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

import AdobeXD from "../assets/Adobe XD.svg";
import arrowdown from "../assets/arrowdown.svg";
import arrowup from "../assets/arrowup.svg";
import blazor from "../assets/Blazor.svg";
import Bootstrap from "../assets/Bootstrap.svg";
import css from "../assets/CSS.svg";
import express from "../assets/Express.svg";
import git from "../assets/Git.svg";
import html from "../assets/HTML.svg";
import IndexedDB from "../assets/IndexedDB.svg";
import JavaScript from "../assets/JavaScript.svg";
import MaterialDesign from "../assets/Material Design.svg";
import MudBlazor from "../assets/MudBlazor.svg";
import mui from "../assets/MUI.svg";
import NodeJS from "../assets/NodeJS.svg";
import Photoshop from "../assets/Photoshop.svg";
import react from "../assets/React.svg";
import redux from "../assets/Redux.svg";
import restapi from "../assets/REST API.svg";
import tailwind from "../assets/Tailwind.svg";
import typescript from "../assets/TypeScript.svg";
import visio from "../assets/Visio.svg";
import data from "../data/data.json";
import Skill from "./Skill";

type props = {
  up: () => void;
  down: () => void;
};

const Skills = ({ up, down }: props) => {
  let array: string[] = [
    react,
    typescript,
    JavaScript,
    redux,
    blazor,
    html,
    css,
    MaterialDesign,
    tailwind,
    Bootstrap,
    NodeJS,
    express,
    mui,
    MudBlazor,
    IndexedDB,
    git,
    restapi,
    visio,
    Photoshop,
    AdobeXD,
  ];

  let skillSet: JSX.Element[] = [];
  data.skills.map((d, i) => {
    skillSet = [
      ...skillSet,
      <Skill key={i} name={d[0]} width={100} url={d[1]} pic={array[i]}></Skill>,
    ];
  });

  return (
    <div className="main-container" id="4">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <img width={24} src={arrowup}></img>
        </IconButton>
      </div>
      <div className="component-container" id="4" onClick={down}>
        {skillSet}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src={arrowdown}></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Skills;
