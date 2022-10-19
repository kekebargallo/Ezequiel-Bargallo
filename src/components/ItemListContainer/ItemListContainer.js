import data from '../mockData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import './itemListContainer.styles.css'

const ItemListContainer = () => {

  const [productList, setProductList] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    getProducts();
  }, [categoryId])

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");
    getDocs(querySnapshot)
    .then(res => {
      const data = res.docs.map(doc => (doc.data()));
      categoryId
      ?setProductList(data.filter(product => product.categoryId === categoryId))
      :setProductList(data);
    })
    .catch(err => console.log(err));
};

  return (
    <>{productList 
      ?<ItemList lista={productList}/>
      :<img className="loadingItemList" src='/assets/img/flaneur_icon.jpeg' />}
    </>
  )
}

export default ItemListContainer;