import "../styles/style.scss";

import Down from "@mui/icons-material/KeyboardArrowDownRounded";
import Up from "@mui/icons-material/KeyboardArrowUpRounded";
import { IconButton } from "@mui/material";

import data from "../data/data.json";

type props = {
  up: () => void;
  down: () => void;
};
const Summary = ({ down, up }: props) => {
  return (
    <div className="main-container" id="2">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <Up></Up>
        </IconButton>
      </div>
      <div className="component-container" id="2" onClick={down}>
        {data.summary}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <Down></Down>
        </IconButton>
      </div>
    </div>
  );
};

export default Summary;
