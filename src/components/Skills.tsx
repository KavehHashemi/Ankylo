/* eslint-disable array-callback-return */
import "../styles/style.scss";

import Down from "@mui/icons-material/KeyboardArrowDownRounded";
import Up from "@mui/icons-material/KeyboardArrowUpRounded";
import { IconButton } from "@mui/material";

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
          <Up></Up>
        </IconButton>
      </div>
      <div className="component-container" id="4" onClick={down}>
        {skillSet}
        {toolSet}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <Down></Down>
        </IconButton>
      </div>
    </div>
  );
};

export default Skills;
