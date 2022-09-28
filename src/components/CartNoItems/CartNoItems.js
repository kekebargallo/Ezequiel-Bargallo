import { Link } from "react-router-dom";
import './cartNoItems.styles.css'

const CartNoItems = () => {
  return (
    <article className="cartNoItemsContainer">
        <h2>Su carrito está vacío</h2>
        <Link to='/'><h3>Volver a comprar</h3></Link>
    </article>
  )
}

export default CartNoItems