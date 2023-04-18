import '../styles/style.scss';

import Arrow from '@mui/icons-material/KeyboardArrowDownRounded';
import IconButton from '@mui/material/IconButton';

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
            src="./assets/pp2.jpg"
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
          <Arrow></Arrow>
        </IconButton>
      </div>
    </div>
  );
};

export default ID;
