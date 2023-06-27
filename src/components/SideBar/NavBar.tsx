import HomeIcon from '../icons/HomeIcon'
import ProjectsIcon from '../icons/ProjectsIcon'
import SkillIcon from '../icons/SkillIcon'

const NavBar = () => {
  return (
        <nav className='sideNav' aria-role='side-navbar'>
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
  )
}

export default NavBar