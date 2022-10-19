import ItemCountDetail from '../ItemCountDetail/ItemCountDetail';
import './ItemDetail.styles.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({product}) => {

  const [count, setCount] = useState(1);
  
  const [added, setAdded] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = product => {
    addItem(product, count);
    setAdded(true);
  }

  return (
    <div className="itemDetailContainer">
        <h2>{product.name}</h2>
        <img src={product.img.primeraImg} />
        <p className="itemDetailDes">{product.description}</p>
        <p className="itemDetailPrice">{product.price}$</p>
        <ItemCountDetail
        stock={product.stock}
        count={count}
        setCount={setCount}/>
        {added
        ? <Link to='/cart' className='cartLinkDetail'>Terminar compra</Link>
        : <button onClick={() => onAdd(product)} className='addToCartDetail'>Agregar al carrito</button>
        }
    </div>
  )
};

export default ItemDetail;