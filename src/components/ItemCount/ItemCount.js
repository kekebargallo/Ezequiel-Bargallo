import './ItemCount.styles.css';
import { useState } from 'react';

const ItemCount = ( {stock, initial}) => {

    const [contador, setContador] = useState(initial)

    const increase = () => {
        contador < 3 && setContador(contador + 1);
    };

    const decrease = () => {
        contador > 1 && setContador(contador - 1);
    };

  return (
    <div className='countContainer'>
        <button onClick={decrease} className='decreaseCounter'>-</button>
        <h2 className='numberCounter'>{contador}</h2>
        <button onClick={increase} className='increaseCounter'>+</button>
    </div>
  )
}

export default ItemCount;