import { useContext} from "react";
import { CartContext } from "../../context/cartContext";
import './cartContainer.styles.css';
import Cart from '../Cart/Cart';
import CartNoItems from "../CartNoItems/CartNoItems";

const CartContainer = () => {

    const { cart } = useContext(CartContext);
    const cartItems = cart.length > 0 ? true : false;

  return (
    <div className={cartItems ? "cartContainer" : "noProducts"}>{
        cartItems
        ? <Cart />
        : <CartNoItems />
    }
    </div>
  )
}

export default CartContainer;