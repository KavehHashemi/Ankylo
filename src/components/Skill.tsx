type props = {
  name: string;
  width: number;
  url?: string;
};
const Skill = ({ name, width, url }: props) => {
  let source: string = `assets/${name}.svg`;

  return (
    <div className="skill-card">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", textAlign: "center", color: "#333" }}
      >
        <img width={width} alt={name} src={source}></img>
        <div id="title" style={{ fontWeight: "500" }}>
          {name}
        </div>
      </a>
    </div>
  );
};

export default Skill;
