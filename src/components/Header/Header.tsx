import GitHub from "../Icons/GitHub";
import Linkedin from "../Icons/Linkedin";
import Logo from "../Icons/Logo";
import Moon from "../Icons/Moon";
import WhatsApp from "../Icons/WhatsApp";

const Header = () => {
  return (  
    <header className="header">
      <span className="logo">
        <Logo/>
      </span>
      <nav className="header__navbar-container">
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Projetos</a></li>
        </ul>
      </nav>
      <div className="header__contacts-links">
        <ul>
          <li><a href=""><GitHub/></a></li>
          <li><a href=""><Linkedin/></a></li>
          <li><a href=""><WhatsApp/></a></li>
        </ul>
        <i className="toggle-theme">
          <Moon/>
        </i>
      </div>
    </header>
  )
}

export default Header;