import './NavBar.styles.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return <header className="header">

    <div className="headerLogo">
      <NavLink to={'/'}>
          <img className="headerLogoImg" src="/assets/img/flaneur_icon.jpeg" />
      </NavLink>
     </div>
    
      <nav className="headerNav">

          <ul className="headerNavList">
              <li>
                  <NavLink
                  to={'/'}
                  className={({isActive}) =>
                  isActive
                  ? "headerLinkActive"
                  : "headerLinkInactive"}>
                  Home
                  </NavLink>
              </li>
              <li>
                  <NavLink
                  to={'/category/camisas'}
                  className={({isActive}) =>
                  isActive
                  ? "headerLinkActive"
                  : "headerLinkInactive"}>
                  Camisas
                  </NavLink>
              </li>
              <li>
                  <NavLink
                  to={'/category/pantalones'}
                  className={({isActive}) =>
                  isActive
                  ? "headerLinkActive"
                  : "headerLinkInactive"}>
                  Pantalones
                  </NavLink>
              </li>
          </ul>

      </nav>
        
        <CartWidget />
      

      <div className="headerInsta">
      <a href="https://www.instagram.com/flaneurenlaciudad/?hl=es-la" target="_blank"><img className="headerInstaImg" src="/assets/img/insta.png" /></a>
      </div>
  </header>
};

export default NavBar;