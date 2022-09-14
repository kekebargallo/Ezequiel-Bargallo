import { useState, useEffect } from "react";
import './ItemDetail.styles.css';

const ItemDetail = ({item}) => {

    console.log(item);

  return (
    <div className="container">
        <h2>{item.name}</h2>
        <img src={item.img} />
    </div>
  )
};

export default ItemDetail;