import CleanCodeIcon from "../Icons/CleanCodeIcon.tsx";
import LearningIcon from "../Icons/LearningIcon.tsx";
import ResponsiveIcon from "../Icons/ResponsiveIcon.tsx";
import Avatar from "./Avatar/Avatar.tsx";
import Card from "../Card/Cards.tsx";
import Title from "./Title/Title.tsx";
import ScrollReveal from "scrollreveal";
import React from "react";

const Home = () => {
  React.useEffect(() => {
    ScrollReveal().reveal(".home-card", { duration: 300, reset: true });
    ScrollReveal().reveal(".effect-1", { interval: 100, reset: true });
  }, []);

  const info = {
    info: [
      {
        id: 1,
        title: "Design Responsivo",
        content:
          "Desenvolvimento de websites e aplicações  totalmente responsivas.",
        icon: <ResponsiveIcon />,
      },
      {
        id: 2,
        title: "Codigo Limpo",
        content:
          "Boas praticas na ecrita de Codigo, HTML Semantico, Arquitetura BEM para nomenclatura das Classes CSS, Funções e Variaveis com Javascript seguindo boas praticas.",
        icon: <CleanCodeIcon />,
      },
      {
        id: 3,
        title: "Aprendizado Continuo",
        content:
          "Aprendizado continuo mesclando o estudo diario com a pratica atraves de codigo, participação em comunidades de desenvolvimento, leitura de documentação e etc.",
        icon: <LearningIcon />,
      },
    ],
  };

  return (
    <section id="home">
      <div className="home-title">
        <Title />
        <Avatar />
      </div>
      <ul className="home-card">
        {info.info.map((item) => (
          <Card
            variant="effect-1"
            icon={item.icon}
            title={item.title}
            content={item.content}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Home;
