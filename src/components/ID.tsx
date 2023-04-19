import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

import arrowdown from "../assets/arrowdown.svg";
import pp from "../assets/pp.jpg";

type props = {
  down: () => void;
};
const ID = ({ down }: props) => {
  return (
    <div className="main-container" id="1" onClick={down}>
      <div className="component-container" id="1">
        <div className="avatar-container">
          <img
            className="avatar-container"
            height={120}
            src={pp}
            alt="ProfilePic"
          ></img>
        </div>
        <div className="name-container">
          <div>Kaveh Hashemi</div>
          <div>Frontend Developer</div>
        </div>
      </div>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src={arrowdown}></img>
        </IconButton>
      </div>
    </div>
  );
};

export default ID;
