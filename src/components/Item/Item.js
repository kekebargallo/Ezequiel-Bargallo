import './Item.styles.css';

const item = ({id, name, price, img}) => {
  return (
    <div className='itemCard'>
        <img width={'200px'} src={img} alt={id} />
        <h2>{name}</h2>
        <h3>${price}</h3>
    </div>
  )
};

export default item;