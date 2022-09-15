import data from '../mockData';
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
      getItemDetail
      .then((response) => {
        setProduct(response);
      })
      .catch(error => console.log(error));
    }, [])

  const getItemDetail = new Promise((res, rej) => {
      setTimeout(() => {
        res(data.find(element => element.id === id))
      }, 2000)
  });

  return (
    <>
    {product 
    ? <ItemDetail product={product}/>
    : <h2 style={{margin: '0 10px'}}> Obteniendo el detalle...</h2>}
    </>
  )
};

export default ItemDetailContainer;