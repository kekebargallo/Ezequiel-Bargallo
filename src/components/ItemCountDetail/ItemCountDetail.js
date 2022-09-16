import './ItemCountDetail.styles.css'
import { useState } from 'react';

const ItemCountDetail = ( {stock, initial}) => {

    const [contador, setContador] = useState(initial)

    const increase = () => {
        contador < stock && setContador(contador + 1);
    };

    const decrease = () => {
        contador > 1 && setContador(contador - 1);
    };

  return (
    <div className='countContainer'>
        <button onClick={decrease} className='decreaseCounter'>-</button>
        <h4 className='numberCounter'>{contador}</h4>
        <button onClick={increase} className='increaseCounter'>+</button>
    </div>
  )
}

export default ItemCountDetail;