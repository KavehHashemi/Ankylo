import "../styles/style.scss";

import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

import arrowdoubleup from "../assets/arrowdoubleup.svg";
import arrowup from "../assets/arrowup.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import locale from "../assets/location.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import reddit from "../assets/reddit.svg";

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
          <img width={24} src={arrowup}></img>
        </IconButton>
      </div>
      <div className="component-container" id="7">
        <div className="component-card" id="7">
          <Tooltip title="Tehran, Iran">
            <IconButton>
              <img src={locale} alt="Location"></img>
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
              <img src={mail} alt="Email"></img>
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
                <img src={github} alt="GitHub"></img>
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
                <img src={linkedin} alt="LinkedIn"></img>
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
              <img src={phone} alt="Phone"></img>
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
                <img src={reddit} alt="Reddit"></img>
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
      <a href="./KavehHashemiCV.docx" download={true}>
        <div className="component-container sign" id="7"></div>
      </a>
      <div className="arrow-container" onClick={down}>
        <IconButton>
          <img width={24} src={arrowdoubleup}></img>
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
