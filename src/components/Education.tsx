import '../styles/style.scss';

import Down from '@mui/icons-material/KeyboardArrowDownRounded';
import Up from '@mui/icons-material/KeyboardArrowUpRounded';
import { IconButton } from '@mui/material';

type props = {
  up: () => void;
  down: () => void;
};
const Education = ({ up, down }: props) => {
  return (
    <div className="main-container" id="5">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <Up></Up>
        </IconButton>
      </div>
      <div className="component-container" id="5" onClick={down}>
        <div className="education-card">
          <div className="education-item">
            <img width={60} src="./assets/English.svg" alt=""></img>
            <div className="educations">
              <div>English</div>
              <div>Full Professional</div>
            </div>
          </div>
          <div className="education-item">
            <img width={60} src="./assets/Farsi.svg" alt=""></img>
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
              src="./assets/University of tehran.svg"
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
              src="./assets/Shahrood University of Technology.svg"
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
          <Down></Down>
        </IconButton>
      </div>
    </div>
  );
};

export default Education;
