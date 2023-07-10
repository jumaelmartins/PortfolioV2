import EmailIcon from "../Icons/EmailIcon";
import WhatsApp from "../Icons/WhatsApp";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <i>
            <EmailIcon />
          </i>
          <p>jumaelmartins@gmail.com</p>
        </li>
        <li>
          <i>
            <WhatsApp />
          </i>
          <p>71996040206</p>
        </li>
      </ul>
      <p>Alguns direitos reservados 2023</p>
    </footer>
  );
};

export default Footer;
