const Habilidades = () => {
  const habilidades = {
    dominadas: ["HTML", "CSS", "JAVASCRIPT", "SASS", "GITHUB"],
    aprendendo: ["TYPESCRIPT", "REACT", "NODEJS"],
  };

  return (
    <div className="habilidades">
      <h3>Habilidades</h3>
      <div className="habilidades--dominadas--container">
        <h3>Já utilizo com maestria</h3>
        <ul className="habilidades--dominadas">
          {habilidades.dominadas.map((habilidade) => (
            <li>{habilidade}</li>
          ))}
        </ul>
      </div>
      <div className="habilidades--aprendendo--container">
        <h3>Aprendendo</h3>
        <ul className="habilidades--aprendendo">
          {habilidades.aprendendo.map((habilidade) => (
            <li>{habilidade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Habilidades;
