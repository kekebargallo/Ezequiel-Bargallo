import { Link } from 'react-router-dom';
import './cartCard.styles.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartCard = ({id, name, price, img, quantity, setCheck, setCheckoutForm}) => {

  const { removeItem } = useContext(CartContext);

  const remove = itemId => {
    removeItem(itemId);
    setCheck((current) => !current);
    setCheckoutForm(false);
  };

  return (
    <>
        <article className='cardCart'>
            <div className="cardCartImg"><img src={img} alt={name} /></div>
            <div className="cardCartText"><h3>{name}</h3></div>
            <div onClick={() => remove(id)} className="cardCartRemoveButton"><span>Quitar del carrito</span></div>
            <Link to='/' className="cardCartShopLink"><span>Ver en shop</span></Link>
            <div className="cardCartPrice"><p>${price}</p></div>
            <div className="cardCartQuantity"><p>Cantidad de<br/>productos: {quantity}</p></div>
        </article>
    </>
  )
}

export default CartCard;