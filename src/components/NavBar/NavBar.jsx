import './NavBar.styles.css';
import { NavLink } from 'react-router-dom';

const navBar = () => {
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
                  to={'/category/galeria'}
                  className={({isActive}) =>
                  isActive
                  ? "headerLinkActive"
                  : "headerLinkInactive"}>
                  Galería
                  </NavLink>
              </li>
          </ul>

      </nav>

      <div className="headerCarrito">
        <a><img className="headerInstaImg" src="/assets/img/carrito.png" /></a>
      </div>

      <div className="headerInsta">
      <a href="https://www.instagram.com/flaneurenlaciudad/?hl=es-la" target="_blank"><img className="headerInstaImg" src="/assets/img/insta.png" /></a>
      </div>
  </header>
};

export default navBar;