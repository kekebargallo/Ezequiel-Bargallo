import { useEffect, useState } from "react";
import data from '../mockData';
import GaleriaSquareCardList from "../GaleriaSquareCardList/GaleriaSquareCardList";
import './GaleriaSquareCardContainerList.styles.css';

const GaleriaSquareCardListContainer = () => {
  const [products, setProducts] = useState()
  
  useEffect(() => {
    getProducts
    .then((response) => {
      setProducts(response)
    })
  }, [])

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000)
  });

  return (
    <>{products
      && <div className="galeriaSquareCardListContainer">
        <GaleriaSquareCardList products={products}/>
      </div>
    }
    </>
  )
}

export default GaleriaSquareCardListContainer;