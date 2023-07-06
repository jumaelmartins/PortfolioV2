import CssIcon from "../../Icons/CssIcon";
import GitHub from "../../Icons/GitHub";
import HtmlIcon from "../../Icons/HtmlIcon"
import JavaScriptIcon from "../../Icons/JavaScriptIcon";
import NodeIcon from "../../Icons/NodeIcon";
import ReactIcon from "../../Icons/ReactIcon";
import SassIcon from "../../Icons/SassIcon";
import TypescriptIcon from "../../Icons/TypescriptIcon";

const Habilidades = () => {
  const habilidades = {
    dominadas: [<HtmlIcon/>, <CssIcon/>, <JavaScriptIcon/>, <SassIcon/>, <GitHub/>],
    aprendendo: [<TypescriptIcon/>, <ReactIcon/>, <NodeIcon/>],
  };

  return (
    <div className="skills">
      <h3>Habilidades</h3>
      <div className="skills__adquired">
        <h3>Já utilizo com maestria</h3>
        <ul className="skills__adquired__mastered">
          {habilidades.dominadas.map((habilidade) => (
            <li>{habilidade}</li>
          ))}
        </ul>
      </div>
      <div className="skill__learning">
        <h3>Aprendendo</h3>
        <ul className="skill__learning__newbie">
          {habilidades.aprendendo.map((habilidade) => (
            <li>{habilidade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Habilidades;
