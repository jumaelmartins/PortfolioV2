import HomeIcon from "../Icons/HomeIcon";
import ProjectsIcon from "../Icons/ProjectsIcon";
import SkillIcon from "../Icons/SkillIcon";

const NavBar = () => {
  return (
    <nav className="side-navbar">
      <ul>
        <li>
          <HomeIcon/>
        </li>
        <li>
          <SkillIcon/>
        </li>
        <li>
          <ProjectsIcon/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
