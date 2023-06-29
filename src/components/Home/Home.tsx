import CleanCodeIcon from "../icons/CleanCodeIcon";
import LearningIcon from "../icons/LearningIcon";
import ResponsiveIcon from "../icons/ResponsiveIcon";
import Stroke from "../icons/Stroke";
import Avatar from "./Avatar/Avatar";
import Card from "../Card/Cards";
import Title from "./Title/Title";

const Home = () => {
  return (
    <section id="inicio">
        <div className="inicio--title">
            <Title/>
            <Avatar/>
        </div>
        <ul className="inicio--card">
            <li>
                <Card icon={<ResponsiveIcon/>} title="Design Responsivo" content="Desenvolvimento de websites e aplicações  totalmente responsivas." />
            </li>
            <li>
                <span className="stroke-1">
                </span>
                <Card icon={<CleanCodeIcon/>} title="Codigo Limpo" content="Boas praticas na ecrita de Codigo, HTML Semantico, Arquitetura BEM para nomenclatura das Classes CSS, Funções e Variaveis com Javascript seguindo boas praticas." />
                <span className="stroke-2">
                </span>
            </li>
            <li>
                <Card icon={<LearningIcon/>} title="Aprendizado Continuo" content="Aprendizado continuo através de CTD (Código todos os dias), participação em comunidades de desenvolvimento, leitura de documentação e etc." />
            </li>
        </ul>
    </section>
  )
}

export default Home;