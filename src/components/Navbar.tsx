import "../styles/style.scss";

import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState<string>("/");
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="nav" className="navbar-container">
      <div className={active === "/" ? "border-active" : "border-inactive"}>
        {/* <Link to="/" onClick={() => setActive("/")}>
          HOME
        </Link> */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive("/");
          }}
        >
          HOME
        </div>
      </div>
      <div
        className={active === "/summary" ? "border-active" : "border-inactive"}
      >
        <div
          onClick={() => {
            handleClick("summary");
            setActive("/summary");
          }}
        >
          SUMMARY
        </div>
      </div>
      <div
        className={
          active === "/experience" ? "border-active" : "border-inactive"
        }
      >
        <div
          onClick={() => {
            handleClick("experience");
            setActive("/experience");
          }}
        >
          EXPERIENCE
        </div>
      </div>
      <div
        className={active === "/skills" ? "border-active" : "border-inactive"}
      >
        <div
          onClick={() => {
            handleClick("skills");
            setActive("/skills");
          }}
        >
          SKILLS
        </div>
      </div>
      <div
        className={
          active === "/education" ? "border-active" : "border-inactive"
        }
      >
        <div
          onClick={() => {
            handleClick("education");
            setActive("/education");
          }}
        >
          EDUCATION
        </div>
      </div>
      <div
        className={active === "/projects" ? "border-active" : "border-inactive"}
      >
        <div
          onClick={() => {
            handleClick("projects");
            setActive("/projects");
          }}
        >
          PROJECTS
        </div>
      </div>
      <div
        className={active === "/contact" ? "border-active" : "border-inactive"}
      >
        <div
          onClick={() => {
            handleClick("contact");
            setActive("/contact");
          }}
        >
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default Navbar;
