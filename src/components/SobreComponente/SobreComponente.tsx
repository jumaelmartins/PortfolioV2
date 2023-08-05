import Card from "../Card/Cards.tsx";
import Title from "../Title/Title.tsx";
import PlusIcon from "../Icons/PlusIcon.tsx";
import ExperienciaProfissional from "./ExperienciaProfissional/ExperienciaProfissional.tsx";
import FormacaoAcademica from "./FormacaoAcademica/FormacaoAcademica.tsx";
import Habilidades from "./Habilidades/Habilidades.tsx";
import ScrollReveal from "scrollreveal";
import React from "react";



const sobreComponente = () => {

  React.useEffect(() => {
    ScrollReveal().reveal(".about__container", {duration: 100, reset: true});
    ScrollReveal().reveal(".skill", {interval: 10, reset: true})
    ScrollReveal().reveal(".experience", {interval: 10, reset: true})
    ScrollReveal().reveal(".degree", {interval: 10, reset: true})
    ScrollReveal().reveal(".card--about", {interval: 10, reset: true})
  }, []);

  
  return (
    <section id="about">
      <Title content="sobre" />
      <div className="about__container">
        <section className="about__experience">
          <Habilidades />
          <ExperienciaProfissional />
          <FormacaoAcademica />
        </section>
        <section className="about__resume">
          <div>
            <p>
              Me chamo Jumael Martins, sou um desenvolvedor front end web,
              comecei meus estudos por volta de mai/2022, no momento estou com
              foco em react e typescript.
              gosto de animes, musculação e acompanhar conteudos sobre technologia no youtube.
            </p>
          </div>
          <ul className="about__card-container">
            <Card
              title="20"
              content="Projetos"
              variant="card--about"
              icon={<PlusIcon />}
            />
            <Card
              title="1Y"
              content="Experiencia"
              variant="card--about card-2"
              icon={<PlusIcon />}
            />
            <Card
              title="300"
              content="Commits"
              variant="card--about"
              icon={<PlusIcon />}
            />
          </ul>
        </section>
      </div>
    </section>
  );
};

export default sobreComponente;
