import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './cartWidget.styles.css';

const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const quantities = cart.map(product => product.quantity);
    const cartItems = cart.length > 0 ? quantities.reduce((x, y) => x + y) : false;

  return (
    <>{cartItems
    &&  <div className="headerCart">
            <span className='headerCartItemCounter'>{cartItems}</span>
            <Link to='/cart'>
                <img src="/assets/img/carrito.png" />
            </Link>
        </div>
    }
    </>
  )
}

export default CartWidget