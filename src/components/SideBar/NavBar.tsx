import HomeIcon from '../icons/HomeIcon'
import ProjectsIcon from '../icons/ProjectsIcon'
import SkillIcon from '../icons/SkillIcon'

const NavBar = () => {
  return (
    <aside>
        <nav>
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
    </aside>
  )
}

export default NavBar