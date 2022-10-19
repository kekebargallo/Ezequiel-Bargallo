import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import './itemDetailContainer.styles.css'

const ItemDetailContainer = () => {
    
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
      getItemDetail();
    }, [])

  const getItemDetail = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");
    getDocs(querySnapshot)
    .then(res => {
      const data = res.docs.map(doc => (doc.data()));
      setProduct(data.find(element => element.id === id));
    })
    .catch(err => console.log(err));
  };

  return (
    <>
    {product 
    ? <ItemDetail product={product}/>
    : <img className="loadingItemDetail" src='/assets/img/flaneur_icon.jpeg' />}
    </>
  )
};

export default ItemDetailContainer;