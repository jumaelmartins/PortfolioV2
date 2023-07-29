import Filter from "../Icons/Filter";
import Search from "../Icons/Search";
import Title from "../Title/Title";
import Filtro from "./Filtro/Filtro";
import Form from "./Form/Form";
import instagramImg from "../../assets/img/instagram-img.png";
// import Card from "../Card/Cards";
// import JavaScriptIcon from "../Icons/JavaScriptIcon";
// import HtmlIcon from "../Icons/HtmlIcon";
import React from "react";
import Pagination from "../Pagination/Pagination";

interface projetos {
  id: string;
  name: string;
}

const ProjetosComponente = () => {
  const [data, setData] = React.useState<null | projetos[]>(null);
  const [offset, setOffset] = React.useState(0);
  const [total, setTotal] = React.useState(6);
  const limit = 6;

  React.useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(
        "https://api.github.com/users/jumaelmartins/repos"
      );
      const json = await response.json();
      const start = offset;
      const end = offset + limit;
      setTotal(json.length);
      setData(json.slice(start, end));
    };

    dataFetch();
  }, [offset]);

  const projetos = [
    {
      title: "projeto 1",
      id: 0,
      img: instagramImg,
      content: "teste",
      langs: {
        javascript: 123,
        html: 1,
        css: 2,
      },
    },
  ];

  const novoArray = projetos.reduce((acc: any, obj) => {
    const langs = Object.keys(obj.langs);
    langs.forEach((lang) => {
      if (!acc.includes(lang)) {
        acc.push(lang);
      }
    });
    return acc;
  }, []);

  return (
    <section id="projects">
      <div className="projects--title">
        <Title content="PROJETOS" />
      </div>
      <div className="filter">
        <Filtro icon={<Filter />} content={novoArray} />
      </div>
      <Form
        placeholder="Busque, por nome, linguagem ou tecnologias"
        id="search"
        icon={<Search />}
      />

      <ul className="projects-card">
        {data?.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <Pagination
        total={total}
        offset={offset}
        limit={limit}
        setOffset={setOffset}
      />
    </section>
  );
};

export default ProjetosComponente;
