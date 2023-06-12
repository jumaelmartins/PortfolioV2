import Logo from "../icons/Logo";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo/>
      </div>
      <nav>
        <ul>
          <li><a href="">INICIO</a><a href="">SOBRE</a><a href="">PROJETOS</a></li>
        </ul>
      </nav>
      <div>
        <ul>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </ul>
        <i>
          icone
        </i>
      </div>
    </header>
  )
}

export default Header;