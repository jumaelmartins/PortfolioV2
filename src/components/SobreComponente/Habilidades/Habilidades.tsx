import CssIcon from "../../Icons/CssIcon";
import GitHub from "../../Icons/GitHub";
import HtmlIcon from "../../Icons/HtmlIcon";
import JavaScriptIcon from "../../Icons/JavaScriptIcon";
import NodeIcon from "../../Icons/NodeIcon";
import ReactIcon from "../../Icons/ReactIcon";
import SassIcon from "../../Icons/SassIcon";
import TypescriptIcon from "../../Icons/TypescriptIcon";

const Habilidades = () => {
  const masteredSkills = [
    { skill: <HtmlIcon />, id: 1 },
    { skill: <CssIcon />, id: 2 },
    { skill: <JavaScriptIcon />, id: 3 },
    { skill: <SassIcon />, id: 4 },
    { skill: <GitHub />, id: 5 },
  ];
  const learningSkills = [
    { skill: <TypescriptIcon />, id: 1 },
    { skill: <ReactIcon />, id: 2 },
    { skill: <NodeIcon />, id: 3 },
  ];

  return (
    <div className="skills">
      <h3>Habilidades</h3>
      <div className="skills__adquired">
        <h3>Já utilizo com maestria</h3>
        <ul className="skills__adquired__mastered">
          {masteredSkills.map((skill) => (
            <li className="skill" key={skill.id}>
              {skill.skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="skills__learning">
        <h3>Aprendendo</h3>
        <ul className="skills__learning__newbie">
          {learningSkills.map((skill) => (
            <li className="skill" key={skill.id}>
              {skill.skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Habilidades;
