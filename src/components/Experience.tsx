import "../styles/style.scss";

import Down from "@mui/icons-material/KeyboardArrowDownRounded";
import Up from "@mui/icons-material/KeyboardArrowUpRounded";
import { IconButton } from "@mui/material";

type props = {
  up: () => void;
  down: () => void;
};
const Experience = ({ up, down }: props) => {
  return (
    <div className="main-container" id="3">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <Up></Up>
        </IconButton>
      </div>
      <div className="component-container" id="3" onClick={down}>
        <div className="exp-card">
          <div id="time">FEB 2023 - PRESENT</div>
          <div id="as">FRONTEND DEVELOPER</div>
          <div id="co">PERSONAL PROJECTS</div>
        </div>
        <div className="exp-card">
          <div id="time">NOV 2018 - PRESENT</div>
          <div id="as">FRONTEND DEVELOPER</div>
          <div id="co">GOSTAREH NEGAR COMPANY</div>
        </div>
        <div className="exp-card">
          <div id="time">OCT 2016 - JUL 2018</div>
          <div id="as">WEB DEVELOPER</div>
          <div id="co">FREELANCE (during conscription)</div>
        </div>
        <div className="exp-card">
          <div id="time">AUG 2016 - OCT 2016</div>
          <div id="as">WEB DEVELOPER</div>
          <div id="co">ARPA SOFTWARE COMPANY</div>
        </div>
        <div className="exp-card">
          <div id="time">AUG 2015 - MAY 2016</div>
          <div id="as">UX/UI DESIGNER</div>
          <div id="co">ATD COMPANY</div>
        </div>
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <Down></Down>
        </IconButton>
      </div>
    </div>
  );
};

export default Experience;
