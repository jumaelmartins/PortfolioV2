import Card from "../Home/Card/Cards";
import Title from "../Title/Title";
import PlusIcon from "../Icons/PlusIcon";
import ExperienciaProfissional from "./ExperienciaProfissional/ExperienciaProfissional";
import FormacaoAcademica from "./FormacaoAcademica/FormacaoAcademica";
import Habilidades from "./Habilidades/Habilidades";

const SobreComponente = () => {
  return (
    <section id="sobre">
      <Title content="SOBRE" />
      <div className="sobre--container">
        <section className="sobre--content--experiencias">
          <Habilidades />
          <ExperienciaProfissional />
          <FormacaoAcademica />
        </section>
        <section className="sobre--content--resumo">
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rem
              libero, quam minima nemo dolore mollitia dolorem natus, temporibus
              harum numquam laborum eveniet tenetur labore doloremque optio
              laudantium quidem incidunt.
            </p>
          </div>
          <div className="sobre--card-container">
              <Card title="20" content="Projetos" variant="card--sobre" icon={<PlusIcon/>}/>
              <Card title="20" content="Projetos" variant="card--sobre card-2" icon={<PlusIcon/>}/>
              <Card title="20" content="Projetos" variant="card--sobre" icon={<PlusIcon/>}/>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SobreComponente;
