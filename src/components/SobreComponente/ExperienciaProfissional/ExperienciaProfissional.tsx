import React from "react";
import SuitCaseIcon from "../../Icons/SuitCaseIcon";

const ExperienciaProfissional = () => {
  const experiencia = {
    experiencia: [
      {
        id: 4,
        cargo: "Analista de PCP",
        empresa: "R2T Telecomunicações",
        inicio: "04-2023",
        fim: "Até o Momento",
      },
      {
        id: 3,
        cargo: "Desenvolvedor Front End",
        empresa: "Autonomo (Freelance)",
        inicio: "12-2022",
        fim: "Até o Momento",
      },
      {
        id: 2,
        cargo: "Assistente de Operações",
        empresa: "Serede",
        inicio: "01-2019",
        fim: "04-2023",
      },
      {
        id: 1,
        cargo: "Aprendiz Admnistrativo",
        empresa: "Rede Conecta",
        inicio: "04-2017",
        fim: "12-2018",
      },
    ],
  };

  return (
    <div>
      <h3>Experiencia Profissional</h3>
      {experiencia.experiencia.map((experiencia) => (
        <li>
          <SuitCaseIcon/>
          <div>
            <h5>{experiencia.cargo} <b>({experiencia.inicio} - {experiencia.fim})</b></h5>
            <p>{experiencia.empresa}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ExperienciaProfissional;
