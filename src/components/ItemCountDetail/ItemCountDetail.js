import './ItemCountDetail.styles.css'
import { useState } from 'react';

const ItemCountDetail = ( {stock, count, setCount}) => {

    const increase = () => {
      setCount(count + 1);
    };

    const decrease = () => {
        count > 1 && setCount(count - 1);
    };

  return (
    <div className='countContainer'>
        <button onClick={decrease} className='decreaseCounter'>-</button>
        <h4 className='numberCounter'>{count}</h4>
        {count < stock
        && <button
        onClick={increase}
        className='increaseCounter'>+</button>}
    </div>
  )
}

export default ItemCountDetail;