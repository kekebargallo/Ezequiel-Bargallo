import { useContext} from "react";
import { CartContext } from "../../context/cartContext";
import './cart.styles.css';
import CartCard from "../CartCard/CartCard";

const Cart = () => {

    const { cart } = useContext(CartContext);

    const prices = cart.map(product => product.purchasePrice);

    const finalPrice = cart.length > 0 ? prices.reduce((x, y) => x + y) : false;

  return (
    <>
        {cart.map(producto => {
            let {id, name, purchasePrice, img: {imgCuadrada}, quantity, stock} = producto;
            return (
            <CartCard
            key={id}
            id={id}
            name={name}
            price={purchasePrice}
            img={imgCuadrada}
            quantity={quantity} />
            )
        })
        }

        <article className='cartCheckout'>
            <p>Precio final: {finalPrice}</p>
        </article>
    </>
  )
}

export default Cart;