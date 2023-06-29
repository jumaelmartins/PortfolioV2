import Filter from "../Icons/Filter";
import Search from "../Icons/Search";
import Title from "../Title/Title";
import Filtro from "./Filtro/Filtro";
import Form from "./Form/Form";
import instagramImg from "../../assets/img/instagram-img.png"
import Card from "../Card/Cards";

const ProjetosComponente = () => {

  const projetos = {
    projetos: [
      {
        title: "projeto 1",
        id: 0,
        img: instagramImg,
        content: "teste"
      },
      {
        title: "projeto 2",
        id: 1,
        img: instagramImg,
        content: "teste"
      },
      {
        title: "projeto 3",
        id: 2,
        img: instagramImg,
        content: "teste"
      },
      {
        title: "projeto 4",
        id: 3,
        img: instagramImg,
        content: "teste"
      },
      {
        title: "projeto 5",
        id: 4,
        img: instagramImg,
        content: "teste"
      },
      {
        title: "projeto 6",
        id: 5,
        img: instagramImg,
        content: "teste"
      }
    ]
  }


  return (
    <div className="projetos">
      <div className="protetos-titulo">
        <Title content="PROJETOS" />
      </div>
      <div className="filtro">
        <Filtro icon={<Filter/>} content={["html","javascript", "css"]}/>
      </div>
      <Form placeholder="Busque, por nome, linguagem ou tecnologias" id="search" icon={<Search/>} />
      <ul className="projetos-card">
        {
          projetos.projetos.map(projeto => (
            <li>
              <Card variant="third" title={projeto.title} thumb={projeto.img} content={projeto.content} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ProjetosComponente;
