import data from '../mockData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [productList, setProductList] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    getProducts
    .then((response) => {
      setProductList(response);
    })
    .catch(error => console.log(error));
  }, [categoryId])

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      categoryId
      ?res(data.filter(product => product.categoria === categoryId))
      :res(data)
    }, 2000)
});

  return (
    <>{productList 
      ?<ItemList lista={productList}/>
      :<h2 style={{margin: '0 10px'}}> Cargando...</h2>}
    </>
  )
}

export default ItemListContainer;