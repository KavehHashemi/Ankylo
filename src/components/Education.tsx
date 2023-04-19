import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

import arrowdown from "../assets/arrowdown.svg";
import arrowup from "../assets/arrowup.svg";
import En from "../assets/English.svg";
import Fa from "../assets/Farsi.svg";
import US from "../assets/Shahrood University of Technology.svg";
import UT from "../assets/University of tehran.svg";

type props = {
  up: () => void;
  down: () => void;
};
const Education = ({ up, down }: props) => {
  return (
    <div className="main-container" id="5">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <img width={24} src={arrowup}></img>
        </IconButton>
      </div>
      <div className="component-container" id="5" onClick={down}>
        <div className="education-card">
          <div className="education-item">
            <img width={60} src={En} alt=""></img>
            <div className="educations">
              <div>English</div>
              <div>Full Professional</div>
            </div>
          </div>
          <div className="education-item">
            <img width={60} src={Fa} alt=""></img>
            <div className="educations">
              <div>Farsi/Persian</div>
              <div>Native</div>
            </div>
          </div>
        </div>
        <div className="education-card">
          <div className="education-item">
            <img width={60} src={UT} alt=""></img>
            <div className="educations">
              <div>Masters's Degree</div>
              <div>Energy and Architecture</div>
              <div>University of Tehran</div>
            </div>
          </div>
          <div className="education-item">
            <img width={60} src={US} alt=""></img>
            <div className="educations">
              <div>Bachelor's Degree</div>
              <div>Mechanical Engineering</div>
              <div>Shahrood University of Technology</div>
            </div>
          </div>
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

export default Education;
