import ItemCount from "../ItemCount/ItemCount";

const item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img width={'200px'} src={img} alt={id} />
        <h2>{nombre}</h2>
        <h3>${precio}</h3>
        <ItemCount
        stock={3}
        initial={1} />
    </div>
  )
};

export default item;