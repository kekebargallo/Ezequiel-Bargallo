import data from '../mockData';
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        getItemDetail
        .then((response) => {
          setItem(response);
        })
        .catch(error => console.log(error));
      }, [])

    const getItemDetail = new Promise((res, rej) => {
        setTimeout(() => {
          res(data.find(element => element.id === "remCorta"))
        }, 2000)
    });

  return <ItemDetail item={item}/>
};

export default ItemDetailContainer;