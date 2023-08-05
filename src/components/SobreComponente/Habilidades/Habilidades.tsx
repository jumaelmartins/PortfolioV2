import CssIcon from "../../icons/CssIcon";
import GitHub from "../../icons/GitHub";
import HtmlIcon from "../../icons/HtmlIcon";
import JavaScriptIcon from "../../icons/JavaScriptIcon";
import NodeIcon from "../../icons/NodeIcon";
import ReactIcon from "../../icons/ReactIcon";
import SassIcon from "../../icons/SassIcon";
import TypescriptIcon from "../../icons/TypescriptIcon";

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
