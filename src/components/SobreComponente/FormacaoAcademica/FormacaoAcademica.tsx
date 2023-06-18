import GraduationIcon from "../../Icons/GraduationIcon";

const FormacaoAcademica = () => {
  const formacao = {
    formacao: [
      {
        id: 2,
        curso: "Bacharelado em Ciencias da Computação",
        instituicao: "Estacio de Sá",
        inicio: "10-2022",
        fim: "03-2025",
      },
      {
        id: 1,
        curso: "Tecnologo em Redes de Computadores",
        instituicao: "Estacio de Sá",
        inicio: "01-2019",
        fim: "10-2022",
      },
    ],
  };

  return (
    <div>
      <h3>Formacao Academica</h3>
      {formacao.formacao.map((formacao) => (
        <li>
          <div>
            <h5>
              {formacao.curso}{" "}
              <b>
                ({formacao.inicio} - {formacao.fim})
              </b>
            </h5>
            <p>{formacao.instituicao}</p>
          </div>
          <GraduationIcon />
        </li>
      ))}
    </div>
  );
};

export default FormacaoAcademica;
