import Filter from "../Icons/Filter";
import Search from "../Icons/Search";
import Title from "../Title/Title";
import Filtro from "./Filtro/Filtro";
import Form from "./Form/Form";
import instagramImg from "../../assets/img/instagram-img.png";
import Card from "../Card/Cards";
import JavaScriptIcon from "../Icons/JavaScriptIcon";
import HtmlIcon from "../Icons/HtmlIcon";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

register();

const ProjetosComponente = () => {
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
    {
      title: "projeto 2",
      id: 1,
      img: instagramImg,
      content: "teste",
      langs: {
        javascript: 123,
        sass: 1,
        css: 2,
      },
    },
    {
      title: "projeto 3",
      id: 2,
      img: instagramImg,
      content: "teste",
      langs: {
        javascript: 123,
        typescript: 1,
        css: 2,
      },
    },
    {
      title: "projeto 4",
      id: 3,
      img: instagramImg,
      content: "teste",
      langs: {
        javascript: 123,
        html: 1,
        css: 2,
      },
    },
    {
      title: "projeto 5",
      id: 4,
      img: instagramImg,
      content: "teste",
      langs: {
        javascript: 123,
        html: 1,
        css: 2,
      },
    },
    {
      title: "projeto 6",
      id: 5,
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
          {projetos.map((projeto) => (
              <Card
                key={projeto.id}
                variant="third"
                title={projeto.title}
                thumb={projeto.img}
                content={[<JavaScriptIcon />, <HtmlIcon />]}
              />
          ))}
      </ul>
    </section>
  );
};

export default ProjetosComponente;
