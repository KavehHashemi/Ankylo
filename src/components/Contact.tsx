import "../styles/style.scss";

import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

type props = {
  up: () => void;
  down: () => void;
};
const Contact = ({ up, down }: props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="main-container " id="7">
      <div className="arrow-container" onClick={up}>
        <IconButton>
          <img width={24} src="src/assets/arrowup.svg"></img>
        </IconButton>
      </div>
      <div className="component-container" id="7">
        <div className="component-card" id="7">
          <Tooltip title="Tehran, Iran">
            <IconButton>
              <img src="src/assets/location.svg" alt="Location"></img>
            </IconButton>
          </Tooltip>
        </div>

        <div
          className="component-card"
          id="7"
          onClick={() => {
            navigator.clipboard.writeText("KavehHashemi@outlook.com");
            setOpen(true);
          }}
        >
          <Tooltip title="KavehHashemi@outlook.com">
            <IconButton>
              <img src="src/assets/mail.svg" alt="Email"></img>
            </IconButton>
          </Tooltip>
        </div>

        <div className="component-card" id="7">
          <Tooltip title="https://www.github.com/kavehhashemi">
            <IconButton>
              <a
                href="https://www.github.com/kavehhashemi"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex" }}
              >
                <img src="src/assets/github.svg" alt="GitHub"></img>
              </a>
            </IconButton>
          </Tooltip>
        </div>

        <div className="component-card" id="7">
          <Tooltip title="https://www.linkedin.com/in/kavehhashemi">
            <IconButton>
              <a
                href="https://www.linkedin.com/in/kavehhashemi"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex" }}
              >
                <img src="src/assets/linkedin.svg" alt="LinkedIn"></img>
              </a>
            </IconButton>
          </Tooltip>
        </div>

        <div
          className="component-card"
          id="7"
          onClick={() => {
            navigator.clipboard.writeText("+989376318905");
            setOpen(true);
          }}
        >
          <Tooltip title="+989376318905">
            <IconButton>
              <img src="src/assets/phone.svg" alt="Phone"></img>
            </IconButton>
          </Tooltip>
        </div>

        <div className="component-card" id="7">
          <Tooltip title="Reddit">
            <IconButton>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex" }}
              >
                <img src="src/assets/reddit.svg" alt="Reddit"></img>
              </a>
            </IconButton>
          </Tooltip>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success">Copied to clipboard</Alert>
        </Snackbar>
      </div>
      <a href="./assets/KavehHashemiCV.docx" download={true}>
        <div className="component-container sign" id="7"></div>
      </a>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src="src/assets/arrowdoubleup.svg"></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
