import Card from "../Card/Cards";
import Title from "../Title/Title";
import PlusIcon from "../Icons/PlusIcon";
import ExperienciaProfissional from "./ExperienciaProfissional/ExperienciaProfissional";
import FormacaoAcademica from "./FormacaoAcademica/FormacaoAcademica";
import Habilidades from "./Habilidades/Habilidades";

const sobreComponente = () => {
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
              gosto de animes, musculação e dormi.
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
