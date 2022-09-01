import CartWidget from '../CartWidget/CartWidget';
import './NavBar.styles.css';

const navBar = () => {
    return <header className="navContainer">
            <nav className="nav">

        <ul className="navList">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">
                Shop
                </a>
            </li>
            <li>
                <a href="#">
                Galería
                </a>
            </li>
            <li>
                <a href="#">
                Sobre nosotros
                </a>
            </li>
            <li>
                <a href="#">
                Contactos
                </a>
            </li>
            <CartWidget />
        </ul>

    </nav>
</header>
};

export default navBar;