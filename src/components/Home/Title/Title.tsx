import WhatsApp from "../../Icons/WhatsApp"
import TwoStrokes from "../../icons/TwoStrokes"

const Title = () => {
  return (

    <article className="title-container">
        <TwoStrokes ID="stroke"/>
        <div className="title-content">
            <h1 className="title">Desenvolvedor Front End</h1>
            <p>Jumael Martins</p>
        </div>
        <a className="whatsapp">
            <WhatsApp/>
            <p>Fale Comigo</p>
        </a>
    </article>
  )
}

export default Title