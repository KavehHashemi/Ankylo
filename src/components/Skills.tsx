/* eslint-disable array-callback-return */
import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

import data from "../data/data.json";
import Skill from "./Skill";

type props = {
  up: () => void;
  down: () => void;
};
const Skills = ({ up, down }: props) => {
  let skillSet: JSX.Element[] = [];
  data.skills.map((d, i) => {
    skillSet = [
      ...skillSet,
      <Skill key={i} name={d[0]} width={100} url={d[1]}></Skill>,
    ];
  });

  let toolSet: JSX.Element[] = [];
  data.tools.map((t, i) => {
    toolSet = [
      ...toolSet,
      <Skill key={i} name={t[0]} width={100} url={t[1]}></Skill>,
    ];
  });

  return (
    <div className="main-container" id="4">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <img width={24} src="src/assets/arrowup.svg"></img>
        </IconButton>
      </div>
      <div className="component-container" id="4" onClick={down}>
        {skillSet}
        {toolSet}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src="src/assets/arrowdown.svg"></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Skills;
