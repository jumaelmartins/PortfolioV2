import Filter from "../Icons/Filter";
import Search from "../Icons/Search";
import Title from "../Title/Title";
import Filtro from "./Filtro/Filtro";
import Form from "./Form/Form";

const ProjetosComponente = () => {
  return (
    <div className="projetos">
      <div className="protetos-titulo">
        <Title content="PROJETOS" />
      </div>
      <div className="filtro">
        <Filtro icon={<Filter/>} content={["html","javascript", "css"]}/>
      </div>
      <Form placeholder="Busque, por nome, linguagem ou tecnologias" id="search" icon={<Search/>} />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
  );
};

export default ProjetosComponente;
