import "../styles/style.scss";

import IconButton from "@mui/material/IconButton";

type props = {
  up: () => void;
  down: () => void;
};
const Education = ({ up, down }: props) => {
  return (
    <div className="main-container" id="5">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <img width={24} src="src/assets/arrowup.svg"></img>
        </IconButton>
      </div>
      <div className="component-container" id="5" onClick={down}>
        <div className="education-card">
          <div className="education-item">
            <img width={60} src="src/assets/English.svg" alt=""></img>
            <div className="educations">
              <div>English</div>
              <div>Full Professional</div>
            </div>
          </div>
          <div className="education-item">
            <img width={60} src="src/assets/Farsi.svg" alt=""></img>
            <div className="educations">
              <div>Farsi/Persian</div>
              <div>Native</div>
            </div>
          </div>
        </div>
        <div className="education-card">
          <div className="education-item">
            <img
              width={60}
              src="src/assets/University of tehran.svg"
              alt=""
            ></img>
            <div className="educations">
              <div>Masters's Degree</div>
              <div>Energy and Architecture</div>
              <div>University of Tehran</div>
            </div>
          </div>
          <div className="education-item">
            <img
              width={60}
              src="src/assets/Shahrood University of Technology.svg"
              alt=""
            ></img>
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
          <img width={24} src="src/assets/arrowdown.svg"></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Education;
