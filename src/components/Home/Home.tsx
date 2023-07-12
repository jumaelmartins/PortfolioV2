import CleanCodeIcon from "../Icons/CleanCodeIcon";
import LearningIcon from "../Icons/LearningIcon";
import ResponsiveIcon from "../Icons/ResponsiveIcon";
import Avatar from "./Avatar/Avatar";
import Card from "../Card/Cards";
import Title from "./Title/Title";
import ScrollReveal from "scrollreveal";
import React from "react";

const Home = () => {
  React.useEffect(() => {
    ScrollReveal().reveal(".home-card", {duration: 800, reset: true});
    ScrollReveal().reveal(".effect-1", {interval: 200, reset: true})
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
          "Aprendizado continuo através de CTD (Código todos os dias), participação em comunidades de desenvolvimento, leitura de documentação e etc.",
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
