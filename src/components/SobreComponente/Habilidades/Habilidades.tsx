const Habilidades = () => {
  const habilidades = {
    dominadas: ["HTML", "CSS", "JAVASCRIPT", "SASS", "GITHUB"],
    aprendendo: ["TYPESCRIPT", "REACT", "NODEJS"],
  };

  return (
    <div className="habilidades">
      <h3>Habilidades</h3>
      <p>Já utilizo com maestria</p>
      <ul>
        {habilidades.dominadas.map((habilidade) => (
          <li>{habilidade}</li>
        ))}
      </ul>
      <h3>Aprendendo</h3>
      <ul>
        {habilidades.aprendendo.map((habilidade) => (
          <li>{habilidade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Habilidades;
