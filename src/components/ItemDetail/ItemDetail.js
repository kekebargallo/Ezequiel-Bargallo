import ItemCountDetail from './ItemCountDetail/ItemCountDetail';
import './ItemDetail.styles.css';

const ItemDetail = ({product}) => {
  return (
    <div className="container">
        <h2>{product.name}</h2>
        <img src={product.img} />
        <p className="des">Una remera con una estampa de Patty Smith; "la madrina del punk". Remera manga corta Large, 40cm x 60xm.</p>
        <p className="price">{product.price}$</p>
        <ItemCountDetail stock={3} initial={1}/>
    </div>
  )
};

export default ItemDetail;