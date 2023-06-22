import Title from "../Title/Title"
import Filtro from "./Filtro/Filtro"

const ProjetosComponente = () => {
  return (
    <div>
        <Title content="PROJETOS" />
        <Filtro/>
        <form action="/" method="post">
            <label htmlFor="search">
                <i></i>
            </label>
            <input id='search' type="text" placeholder='Busque, por nome, linguagem ou tecnologias' />
        </form>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </div>
  )
}

export default ProjetosComponente