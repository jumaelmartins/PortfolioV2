import HomeIcon from "../Icons/HomeIcon.tsx";
import ProjectsIcon from "../Icons/ProjectsIcon.tsx";
import SkillIcon from "../Icons/SkillIcon.tsx";

const NavBar = () => {
  return (
    <nav className="side-navbar" aria-role="side-navbar">
      <ul>
        <li>
          <HomeIcon />
        </li>
        <li>
          <SkillIcon />
        </li>
        <li>
          <ProjectsIcon />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
