import TwoStrokes from "../../Icons/TwoStrokes"
import WhatsApp from "../../Icons/WhatsApp"


const Title = () => {
  return (

    <article className="title-container">
        <TwoStrokes/>
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