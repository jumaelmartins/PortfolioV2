
interface filtroTypes {
  content: string[],
  icon: React.ReactNode,
}

const Filtro = ({content, icon}: filtroTypes) => {



  return (
    <>
      <i>{icon}</i>
      <ul>
          {content.map((item) => (
            <li><p>{item}</p></li>
          ))}
      </ul>
    </>
  );
};

export default Filtro;
