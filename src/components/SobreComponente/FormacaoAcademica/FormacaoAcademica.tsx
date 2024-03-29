import GraduationIcon from "../../icons/GraduationIcon";

const FormacaoAcademica = () => {
  const formacao = [
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
  ];

  return (
    <div className="college__degree">
      <h3>Formacao Academica</h3>
      <ul>
        {formacao.map((formacao) => (
          <li className="degree" key={formacao.id}>
            <div>
              <h5 className="course">
                {formacao.curso}{" "}
                <b>
                  ({formacao.inicio} - {formacao.fim})
                </b>
              </h5>
              <p className="college">{formacao.instituicao}</p>
            </div>
            <div className="graduation-icon">
              <GraduationIcon />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormacaoAcademica;
