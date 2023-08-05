import GitHub from "../icons/GitHub";
import Linkedin from "../icons/Linkedin";
import Logo from "../icons/Logo";
import Moon from "../icons/Moon";
import WhatsApp from "../icons/WhatsApp";


const Header = () => {
  return (  
    <header className="header">
      <span className="logo">
        <Logo/>
      </span>
      <nav className="header__navbar">
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Projetos</a></li>
        </ul>
      </nav>
      <div className="header__contacts-links">
        <ul>
          <li><a href="#"><GitHub/></a></li>
          <li><a href="#"><Linkedin/></a></li>
          <li><a href="#"><WhatsApp/></a></li>
        </ul>
        <i className="toggle-theme">
          <Moon/>
        </i>
      </div>
    </header>
  )
}

export default Header;