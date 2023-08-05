// import Filter from "../Icons/Filter.tsx";
// import Search from "../Icons/Search.tsx";

// import Filtro from "./Filtro/Filtro.tsx";
// import Form from "./Form/Form.tsx";
// import instagramImg from "../../assets/img/instagram-img.png";

import React from "react";
import Title from "../Title/Title";
import Card from "../Card/Cards";
import Pagination from "../Pagination/Pagination";

interface projetos {
  id: string;
  name: string;
  language: string;
  html_url: string;
  homepage: string;
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

  // const projetos = [
  //   {
  //     title: "projeto 1",
  //     id: 0,
  //     img: instagramImg,
  //     content: "teste",
  //     langs: {
  //       javascript: 123,
  //       html: 1,
  //       css: 2,
  //     },
  //   },
  // ];

  // const novoArray = projetos.reduce((acc: any, obj) => {
  //   const langs = Object.keys(obj.langs);
  //   langs.forEach((lang) => {
  //     if (!acc.includes(lang)) {
  //       acc.push(lang);
  //     }
  //   });
  //   return acc;
  // }, []);

  return (
    <section id="projects">
      <div className="projects--title">
        <Title content="PROJETOS" />
      </div>
      {/* <div className="filter">
        <Filtro icon={<Filter />} content={novoArray} />
      </div>
      <Form
        placeholder="Busque, por nome, linguagem ou tecnologias"
        id="search"
        icon={<Search />}
      /> */}

      <ul className="projects-card">
        {data?.map((repo) => (
          <Card
            key={repo.id}
            title={repo.name}
            content={[repo.language, ""]}
            variant="third"
            repoUrl={repo.html_url}
            deployUrl={repo.homepage}
          />
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
