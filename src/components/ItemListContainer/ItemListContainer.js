import data from '../mockData';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts
    .then((response) => {
      setProductList(data);
    })
    .catch(error => console.log(error));
  }, [])

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(data)
    }, 2000)
});

  return (
    <ItemList lista={productList}/>
  )
}

export default ItemListContainer;