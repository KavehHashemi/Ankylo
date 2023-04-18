/* eslint-disable array-callback-return */
export type ProjectType = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  github: string;
  personal: boolean;
};

const Project = ({
  name,
  description,
  github,
  personal,
  tech,
  url,
}: ProjectType) => {
  let techArray: JSX.Element[] = [];
  tech.map((t, i) => {
    techArray = [
      ...techArray,
      <div key={i} className="chip">
        {t}
      </div>,
    ];
  });
  return (
    <div className="project-card" id="6">
      <div className="project-content" id="name">
        {name}
      </div>
      <div className="project-content" id="description">
        {description}
      </div>
      <div className="project-content" id="tech">
        {techArray}
      </div>
      <div className="project-content" id="action">
        <a
          className="project-content"
          id="link"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
        <a
          className="project-content"
          id="link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      {/* {personal ? (
        <div className="project-content">personal project</div>
      ) : null} */}
    </div>
  );
};

export default Project;
