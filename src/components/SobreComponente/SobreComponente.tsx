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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rem
              libero, quam minima nemo dolore mollitia dolorem natus, temporibus
              harum numquam laborum eveniet tenetur labore doloremque optio
              laudantium quidem incidunt.
            </p>
          </div>
          <ul className="about__card-container">
              <Card title="20" content="Projetos" variant="card--about" icon={<PlusIcon/>}/>
              <Card title="20" content="Projetos" variant="card--about card-2" icon={<PlusIcon/>}/>
              <Card title="20" content="Projetos" variant="card--about" icon={<PlusIcon/>}/>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default sobreComponente;
