import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './ItemList.styles.css';

const ItemList = ({lista}) => {
  return (
    <div className='itemListContainer'>
        {
            lista.map((item) => (
              <Link
                key={item.id}
                to={'/detail/' + item.id}
                className='cardContainer'>
                <Item
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img.primeraImg} />
              </Link>
            ))
        }
    </div> 
  )
};

export default ItemList;