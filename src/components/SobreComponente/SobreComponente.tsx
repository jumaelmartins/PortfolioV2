import Title from "../Title/Title";
import ExperienciaProfissional from "./ExperienciaProfissional/ExperienciaProfissional";
import FormacaoAcademica from "./FormacaoAcademica/FormacaoAcademica";
import Habilidades from "./Habilidades/Habilidades";

const SobreComponente = () => {
  return (
    <section>
      <Title content="SOBRE" />
      <div>
        <section>
          <Habilidades />
          <ExperienciaProfissional />
          <FormacaoAcademica />
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rem
            libero, quam minima nemo dolore mollitia dolorem natus, temporibus
            harum numquam laborum eveniet tenetur labore doloremque optio
            laudantium quidem incidunt.
          </p>
        </section>
      </div>
    </section>
  );
};

export default SobreComponente;
