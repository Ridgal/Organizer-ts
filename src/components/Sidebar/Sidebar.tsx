import { NavLink } from 'react-router-dom';
import { HouseDoor, Folder2Open, InfoCircle, Calendar2Event, BarChart, BoxArrowRight, Gear } from 'react-bootstrap-icons';
import logo from '../../assets/images/bubble.svg';

const Sidebar: React.FC = () => {
  
  const setActive = ( {isActive}: any ) => isActive ? 'nav__link_active' : 'nav__link';

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img alt="logo" src={logo} className="sidebar__logo"/>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className={setActive}>
              <HouseDoor className="nav__icon" />
              <p>Overview</p>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/stats" className={setActive}>
              <BarChart className="nav__icon" />
              <p>Stats</p>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/projects" className={setActive}>
              <Folder2Open className="nav__icon" />
              <p>Projects</p>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/calendar" className={setActive}>
              <Calendar2Event className="nav__icon" />
              <p>Calendar</p>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className={setActive}>
              <InfoCircle className="nav__icon" />
              <p>Contact Us</p>
            </NavLink>
          </li>
        </ul>
        <ul className="nav__setting__list">
          <li className="nav__item">
            <NavLink to="/settings" className={setActive}>
              <Gear className="nav__icon" />
              <p>Settings</p>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/logout" className={setActive}>
              <BoxArrowRight className="nav__icon" />
              <p>Log out</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };
