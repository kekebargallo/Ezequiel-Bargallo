import ItemCountDetail from '../ItemCountDetail/ItemCountDetail';
import './ItemDetail.styles.css';

const ItemDetail = ({product}) => {
  return (
    <div className="itemDetailContainer">
        <h2>{product.name}</h2>
        <img src={product.img.primeraImg} />
        <p className="itemDetailDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="itemDetailPrice">{product.price}$</p>
        <ItemCountDetail stock={3} initial={1}/>
    </div>
  )
};

export default ItemDetail;