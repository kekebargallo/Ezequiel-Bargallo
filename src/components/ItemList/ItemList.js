import Item from '../Item/Item'

const ItemList = ({lista}) => {
  return (
    <div>
        {
            lista.map((product) => (
                <Item key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img} />
            ))
        }
    </div> 
  )
};

export default ItemList;