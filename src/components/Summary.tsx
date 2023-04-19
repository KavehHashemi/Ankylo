import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

import arrowdown from "../assets/arrowdown.svg";
import arrowup from "../assets/arrowup.svg";
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
          <img width={24} src={arrowup}></img>
        </IconButton>
      </div>
      <div className="component-container" id="2" onClick={down}>
        {data.summary}
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src={arrowdown}></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Summary;
