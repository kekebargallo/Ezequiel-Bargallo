import ItemCount from "../ItemCount/ItemCount";

const item = ({id, name, price, img}) => {
  return (
    <div>
        <img width={'200px'} src={img} alt={id} />
        <h2>{name}</h2>
        <h3>${price}</h3>
        <ItemCount
        stock={3}
        initial={1} />
    </div>
  )
};

export default item;